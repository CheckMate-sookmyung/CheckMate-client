import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader, AttendanceConfirmModal } from '@/components';
import SignatureCanvas from 'react-signature-canvas';
import { useState, useRef, useEffect } from 'react';
import { postAttendanceSign } from '@/services';
import { useSessionStorages } from '@/hooks';
import { USER_ID } from '@/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/axios';
import { FiRotateCcw } from 'react-icons/fi';
import { useRecoilValue } from 'recoil';
import { eventIDState } from '@/recoil/atoms/state';

const AttendanceSignPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { studentInfo } = location.state;
  const EVENT_ID = useRecoilValue(eventIDState);

  const [isSigned, setIsSigned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTarget, setEventTarget] = useState('INTERNAL');

  const signatureRef = useRef(null);
  const { getSessionStorage } = useSessionStorages();
  const { studentName, studentNumber, studentInfoId, major } = studentInfo;

  const handleCompletedButtonClick = async () => {
    const signatureImageFile = await fetch(signatureRef.current.toDataURL());
    const signatureImageBlob = await signatureImageFile.blob();
    const form = new FormData();

    form.append('signImage', signatureImageBlob);
    console.log(studentInfo);
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
    const fetchEventDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/events/${USER_ID}/${EVENT_ID}`,
        );
        const eventData = response.data;
        setEventTitle(eventData.eventTitle);
        setEventTarget(eventData.eventTarget);
      } catch (error) {
        console.error('이벤트 타이틀 에러', error);
      }
    };
    fetchEventDetails();
  }, []);

  return (
    <S.AttendanceSignPage>
      <AttendanceHeader eventTitle={eventTitle} activeStep={1} />

      <S.ContentContainer>
        <S.StudentInfoContainer>
          <S.ContentDescription>{major}</S.ContentDescription>
          <S.Title>
            <strong>{studentName}</strong>님이 맞으십니까?
          </S.Title>
        </S.StudentInfoContainer>
        {/* 서명 */}
        <S.CanvasWrapper>
          <S.SignatureResetButton
            onClick={() => {
              signatureRef.current.clear(); // 서명 리셋
              setIsSigned(false);
            }}
          >
            <FiRotateCcw color="#838383" size="28" />
          </S.SignatureResetButton>
          {!isSigned && (
            <S.CanvasPlaceholder>
              본인 확인을 위해, 서명을 입력해주세요.
            </S.CanvasPlaceholder>
          )}
          <S.SignatureCanvasContainer>
            <SignatureCanvas
              penColor="black"
              minWidth={4}
              canvasProps={{
                className: 'sigCanvas',
                style: {
                  borderRadius: '10px',
                  backgroundColor: '#f0eeee',
                },
              }}
              ref={signatureRef}
              onEnd={handleSignature}
            />
          </S.SignatureCanvasContainer>
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
      </S.ContentContainer>
    </S.AttendanceSignPage>
  );
};

AttendanceSignPage.propTypes = {
  userId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  studentInfoId: PropTypes.string.isRequired,
};

export default AttendanceSignPage;
