import React, { useState } from 'react';
import * as S from './AttendanceStudentIdPage.style';
import Modal from '../../components/Modal';
import { getAttendanceCheck } from '../../services';
import { EVENT_DATE, EVENT_ID, USER_ID } from '../../constants';
import { useSessionStorages } from '../../hooks';

const AttendanceStudentIdPage = () => {
  const [enteredDials, setEnteredDials] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [attendanceCheck, setAttendanceCheck] = useState();

  const { setSessionStorage } = useSessionStorages();

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const dialList = Array.from({ length: 9 }, (_, index) => index + 1);

  const isSevenDigits = enteredDials.length === 7;
  const isConfirmEnabled = isSevenDigits;

  const handleDialClick = async (dial) => {
    if (dial === '<') {
      setEnteredDials(enteredDials.slice(0, -1));
    } else if (dial === 'C') {
      setEnteredDials([]);
    } else if (dial === '확인' && isConfirmEnabled) {
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
        setAttendanceCheck(data);
        setSessionStorage('attendance', JSON.stringify(data));
        openModal();
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

  return (
    <S.Container>
      {/* 이벤트 이미지 */}
      <S.LeftSide></S.LeftSide>

      {/* 학번 입력 */}
      <S.RightSide>
        <S.OutContainer>
          <S.Title>학번을 입력하여, 출석 완료해주세요.</S.Title>
          <S.StudentIdContainer>
            {studentId.map((index) => (
              <S.StudentId key={index}>
                {enteredDials[index - 1] || ''}
              </S.StudentId>
            ))}
          </S.StudentIdContainer>
        </S.OutContainer>

        <S.InputContainer>
          <S.DialList>
            {dialList.map((dial, index) => (
              <S.Dial key={index} onClick={() => handleDialClick(dial)}>
                {dial}
              </S.Dial>
            ))}
            <S.SpecialDial key="reset" onClick={() => handleDialClick('C')}>
              {'C'}
            </S.SpecialDial>
            <S.Dial key="zero" onClick={() => handleDialClick('0')}>
              {'0'}
            </S.Dial>
            <S.SpecialDial key="backspace" onClick={() => handleDialClick('<')}>
              {'<'}
            </S.SpecialDial>
          </S.DialList>
          <S.NextBtn
            onClick={() => handleDialClick('확인')}
            isSevenDigits={isSevenDigits}
            disabled={!isConfirmEnabled}
          >
            {'확인'}
          </S.NextBtn>
        </S.InputContainer>
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
