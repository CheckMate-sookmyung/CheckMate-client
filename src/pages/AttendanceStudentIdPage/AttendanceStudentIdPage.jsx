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

  const { setSessionStorage } = useSessionStorages();

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const dialList1 = Array.from({ length: 3 }, (_, index) => index + 1);
  const dialList2 = Array.from({ length: 3 }, (_, index) => index + 4);
  const dialList3 = Array.from({ length: 3 }, (_, index) => index + 7);

  const isSevenDigits = enteredDials.length === 7;
  const isConfirmEnabled = isSevenDigits;

  const handleDialClick = async (dial) => {
    if (dial === '<') {
      setEnteredDials(enteredDials.slice(0, -1));
    } else if (dial === 'C') {
      setEnteredDials([]);
    } else if (dial === '다음' && isConfirmEnabled) {
      await getAttendanceCheck(
        {
          userId: USER_ID,
          eventId: EVENT_ID,
        },
        {
          studentDial: enteredDials(enteredDials.join('')),
          eventDate: EVENT_DATE,
        },
      )
        .then((data) => {
          setAttendanceCheck(data);
          setSessionStorage('attendance', JSON.stringify(data));
          openModal();
        })
        .catch(() => {
          setEnteredDials([]);
          alert('API 에러 발생');
        });
    } else {
      if (enteredDials.length < 7 && dial !== '다음') {
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
      <S.LeftSide></S.LeftSide>
      <S.RightSide>
        <S.Title>학번을 입력해주세요.</S.Title>
        <S.StudentIdContainer>
          {studentId.map((index) => (
            <S.StudentId key={index}>
              {enteredDials[index - 1] || ''}
            </S.StudentId>
          ))}
        </S.StudentIdContainer>
        <S.DialList>
          {dialList1.map((dial, index) => (
            <S.Dial key={index} onClick={() => handleDialClick(dial)}>
              {dial}
            </S.Dial>
          ))}
          {dialList2.map((dial, index) => (
            <S.Dial key={index} onClick={() => handleDialClick(dial)}>
              {dial}
            </S.Dial>
          ))}
          {dialList3.map((dial, index) => (
            <S.Dial key={index} onClick={() => handleDialClick(dial)}>
              {dial}
            </S.Dial>
          ))}
          <S.Dial key="reset" onClick={() => handleDialClick('C')}>
            {'C'}
          </S.Dial>
          <S.Dial key="zero" onClick={() => handleDialClick('0')}>
            {'0'}
          </S.Dial>
          <S.Dial key="backspace" onClick={() => handleDialClick('<')}>
            {'<'}
          </S.Dial>
        </S.DialList>
        <S.ConfirmBtn
          key="confirm"
          onClick={() => handleDialClick('다음')}
          isSevenDigits={isSevenDigits}
          disabled={!isConfirmEnabled}
        >
          {'다음'}
        </S.ConfirmBtn>
      </S.RightSide>
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
