import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader, AttendanceConfirmModal } from '../../components';
import SignatureCanvas from 'react-signature-canvas';
import { useState, useRef, useEffect } from 'react';
import { postAttendanceSign } from '../../services';
import { useSessionStorages } from '../../hooks';
import { USER_ID, EVENT_ID } from '../../constants';
import { axiosInstance } from '../../axios';

const AttendanceSignPage = () => {
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
      <S.Title>{`서명을 입력하세요.`}</S.Title>
      <SignatureCanvas
        penColor="black"
        minWidth={4}
        canvasProps={{
          className: 'sigCanvas',
          width: 900,
          height: 350,
          style: {
            borderRadius: '4px',
            backgroundColor: '#f0eeee',
          },
        }}
        ref={signatureRef}
        onEnd={handleSignature}
      />
      <S.CompletedButton
        onClick={handleCompletedButtonClick}
        disabled={!isSigned}
      >
        입력 완료
      </S.CompletedButton>{' '}
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
