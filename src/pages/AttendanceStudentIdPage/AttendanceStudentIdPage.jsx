import React, { useEffect, useState } from 'react';
import * as S from './AttendanceStudentIdPage.style';
import { AttendanceHeader } from '../../components';
import Modal from '../../components/Modal';
import { getAttendanceCheck } from '../../services';
import { EVENT_DATE, EVENT_ID, USER_ID } from '../../constants';
import { useSessionStorages } from '../../hooks';
import { axiosInstance } from '../../axios';

const AttendanceStudentIdPage = () => {
  const [enteredDials, setEnteredDials] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [attendanceCheck, setAttendanceCheck] = useState();
  const [eventTitle, setEventTitle] = useState('');
  const [isAlreadyCompleted, setIsAlreadyCompleted] = useState(false);
  const [isNoMatch, setIsNoMatch] = useState(false);

  const { setSessionStorage } = useSessionStorages();

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const dialList = Array.from({ length: 9 }, (_, index) => index + 1);

  const isSevenDigits = enteredDials.length === 7;
  const isConfirmEnabled = isSevenDigits;

  const handleDialClick = async (dial) => {
    if (dial === '<') {
      setEnteredDials(enteredDials.slice(0, -1));
    } else if (dial === '서명하러 가기' && isConfirmEnabled) {
      try {
        const data = await getAttendanceCheck(
          {
            userId: USER_ID,
            eventId: EVENT_ID,
          },
          {
            studentDial: Number(enteredDials.join('')),
            eventDate: EVENT_DATE,
          },
        );

        if (!data) {
          setIsNoMatch(true);
          alert('일치하는 학번이 없습니다');
        } else if (data.isAlreadyCompleted) {
          setIsAlreadyCompleted(true);
          alert('이미 출석을 완료하였습니다');
        } else {
          setAttendanceCheck(data);
          setSessionStorage('attendance', JSON.stringify(data));
          openModal();
        }
      } catch {
        setEnteredDials([]);
        alert('API 에러 발생');
      }
    } else {
      if (enteredDials.length < 7 && typeof dial === 'number') {
        setEnteredDials([...enteredDials, dial]);
      }
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
      <AttendanceHeader eventTitle={eventTitle} />
      <S.Title>학번을 입력해주세요.</S.Title>
      <S.StudentIdContainer>
        {studentId.map((index) => (
          <S.StudentId key={index}>{enteredDials[index - 1] || ''}</S.StudentId>
        ))}
      </S.StudentIdContainer>
      <S.DialList>
        {dialList.map((dial, index) => (
          <S.Dial key={index} onClick={() => handleDialClick(dial)}>
            {dial}
          </S.Dial>
        ))}

        <S.Dial key="backspace" onClick={() => handleDialClick('<')}>
          {'<'}
        </S.Dial>
        <S.Dial key="zero" onClick={() => handleDialClick('0')}>
          {'0'}
        </S.Dial>
        <S.GoToSignBtn
          key="confirm"
          onClick={() => handleDialClick('서명하러 가기')}
          isSevenDigits={isSevenDigits}
          disabled={!isConfirmEnabled}
        >
          {'서명하러 가기'}
        </S.GoToSignBtn>
      </S.DialList>
      {isOpen && <S.ModalOverlay />}
      <Modal
        name={attendanceCheck?.studentName}
        major={attendanceCheck?.major}
        studentId={attendanceCheck?.studentNumber}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </S.Container>
  );
};

export default AttendanceStudentIdPage;
