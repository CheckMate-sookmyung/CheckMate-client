import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader, AttendanceConfirmModal } from '../../components';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from 'axios';

const REACT_BASE_URL = 'http://3.37.229.221/api/v1';
const USER_ID = 100;
const EVENT_ID = 2;
// const STUDENT_ID = 516; //출석안됨

const AttendanceSignPage = ({ userId, eventId, studentInfoId }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const signatureRef = useRef(null);

  const navigate = useNavigate();

  const handleInputChange = async () => {
    const signatureImage = signatureRef.current.toDataURL();
    // console.log(signatureImage);

    try {
      const formData = new FormData();
      formData.append('signature', signatureImage);

      await axios.post(
        `${REACT_BASE_URL}/attendance/sign/${USER_ID}/802/753`,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // 'ngrok-skip-browser-warning': '69420',
          },
        },
        // `${REACT_BASE_URL}/attendance/sign/${USER_ID}/${EVENT_ID}/${studentInfoId}`,
        formData,
      );

      openModal(); // 서명 입력 후 출석 완료 창 띄우기
    } catch (error) {
      console.error('서명 전송 에러', error);
    }
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

      <S.CompletedButton onClick={handleInputChange} disabled={!isSigned}>
        입력 완료
      </S.CompletedButton>
    </S.Container>
  );
};

AttendanceSignPage.propTypes = {
  userId: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  studentInfoId: PropTypes.string.isRequired,
};

export default AttendanceSignPage;
