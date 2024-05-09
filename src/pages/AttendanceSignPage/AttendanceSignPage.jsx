import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader, AttendanceConfirmModal } from '../../components';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SAMPLE_NAME = '조영서';

const AttendanceSignPage = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let signaturePad = null;
  const navigate = useNavigate();

  const handleInputChange = () => {
    openModal(); //서명 입력 후 출석 완료 모달 창 뜨기
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
        event="LINE 개발자가 알려주는 React 입문"
        activeStep={1}
      />
      <S.Title>{`${SAMPLE_NAME}님의 서명을 입력하세요.`}</S.Title>

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
        ref={(ref) => {
          signaturePad = ref;
        }}
        onEnd={handleSignature}
      />

      <S.CompletedButton onClick={handleInputChange} disabled={!isSigned}>
        입력 완료
      </S.CompletedButton>
      {isOpen && (
        <>
          <S.ModalOverlay />
          <AttendanceConfirmModal isOpen={isOpen} onClose={closeModal} />
        </>
      )}
    </S.Container>
  );
};

AttendanceSignPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AttendanceSignPage;
