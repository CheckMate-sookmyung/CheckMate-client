import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader, AttendanceConfirmModal } from '../../components';
import SignatureCanvas from 'react-signature-canvas';
import { useState, useRef, useEffect } from 'react';
import { postAttendanceSign } from '../../services';
import { useSessionStorages } from '../../hooks';
import { USER_ID, EVENT_ID } from '../../constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';

const AttendanceSignPage = ({ name, major, studentId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { studentInfo } = location.state;

  const [isSigned, setIsSigned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');

  const signatureRef = useRef(null);
  const { getSessionStorage } = useSessionStorages();
  const { studentInfoId, studentName } = JSON.parse(
    getSessionStorage('attendance'),
  );

  const handleCompletedButtonClick = async () => {
    const signatureImageFile = await fetch(signatureRef.current.toDataURL());
    const signatureImageBlob = await signatureImageFile.blob();
    const form = new FormData();

    form.append('signImage', signatureImageBlob);

    await postAttendanceSign(
      {
        userId: USER_ID,
        eventId: EVENT_ID,
        studentInfoId,
      },
      form,
    )
      .then(() => {
        openModal();
      })
      .catch(() => {
        alert('API 에러');
      });
  };

  const handleSignature = () => {
    if (!isSigned) {
      setIsSigned(true);
    }
  };

  const handleCancelButtonClick = async () => {
    navigate('/attendance/student-id');
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchEventTitle = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        setEventTitle(response.data.eventTitle);
      } catch (error) {
        console.error('이벤트 타이틀 에러', error);
      }
    };

    fetchEventTitle();
  }, []);

  return (
    <S.Container>
      <AttendanceHeader eventTitle={eventTitle} activeStep={1} />
      <S.Title>
        <strong>{studentInfo.name}</strong>님이 맞으십니까?
      </S.Title>
      <S.ContentContainer>
        <S.Content>
          <S.ContentTitle>학과</S.ContentTitle>
          <S.ContentDescription>{studentInfo.major}</S.ContentDescription>
        </S.Content>
        <S.Content>
          <S.ContentTitle>학번</S.ContentTitle>
          <S.ContentDescription>{studentInfo.number}</S.ContentDescription>
        </S.Content>
      </S.ContentContainer>

      {/* 서명 */}
      <S.CanvasWrapper>
        {!isSigned && (
          <S.CanvasPlaceholder>
            본인 확인을 위해, 서명을 입력해주세요
          </S.CanvasPlaceholder>
        )}
        <SignatureCanvas
          penColor="black"
          minWidth={4}
          canvasProps={{
            className: 'sigCanvas',
            width: 900,
            height: 380,
            style: {
              borderRadius: '4px',
              backgroundColor: '#f0eeee',
            },
          }}
          ref={signatureRef}
          onEnd={handleSignature}
        ></SignatureCanvas>
      </S.CanvasWrapper>

      {/* 버튼 */}
      <S.ButtonContainer>
        <S.CancelButton onClick={handleCancelButtonClick}>
          본인이 아닙니다
        </S.CancelButton>
        <S.CompletedButton
          onClick={handleCompletedButtonClick}
          disabled={!isSigned}
        >
          입력 완료
        </S.CompletedButton>
        {/* <S.SignatureResetButton
          onClick={() => {
            signatureRef.current.clear(); // 서명리셋
            setIsSigned(false);
          }}
        >
          서명 다시
        </S.SignatureResetButton> */}
      </S.ButtonContainer>

      {/* 출석 완료 모달 */}
      {isOpen && (
        <>
          <S.ModalOverlay />
          <AttendanceConfirmModal
            isOpen={isOpen}
            name={studentName}
            onClose={closeModal}
          />
        </>
      )}
    </S.Container>
  );
};

AttendanceSignPage.propTypes = {
  userId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  studentInfoId: PropTypes.string.isRequired,
};

export default AttendanceSignPage;
