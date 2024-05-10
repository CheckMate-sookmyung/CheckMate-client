import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader, AttendanceConfirmModal } from '../../components';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { postAttendanceSign } from '../../services';
import { useSessionStorages } from '../../hooks';
import { USER_ID, EVENT_ID } from '../../constants';

const AttendanceSignPage = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <S.Container>
      <AttendanceHeader
        event="AI & ML Ops Foundation (입문과정)"
        activeStep={1}
      />
      <S.Title>{`서명을 입력하세요.`}</S.Title>
      {/* <S.Title>{`${SAMPLE_NAME}님의 서명을 입력하세요.`}</S.Title> */}
      <SignatureCanvas
        penColor="black"
        canvasProps={{
          className: 'sigCanvas',
          width: 600,
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
