import React, { useState } from 'react';
import * as S from './AttendancePage.style';
import { AttendanceHeader } from '../../components';

const AttendancePage = () => {
  const [enteredNumbers, setEnteredNumbers] = useState([]);

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const numberList1 = Array.from({ length: 5 }, (_, index) => index + 1);
  const numberList2 = Array.from({ length: 4 }, (_, index) => index + 6);

  const isSevenDigits = enteredNumbers.length === 7;

  const handleNumberClick = (number) => {
    if (number === '<') {
      setEnteredNumbers(enteredNumbers.slice(0, -1));
    } else if (number === '확인') {
      // 확인 기능
    } else {
      if (enteredNumbers.length < 7) {
        setEnteredNumbers([...enteredNumbers, number]);
      }
    }
  };

  return (
    <S.Container>
      <AttendanceHeader event="LINE 개발자가 알려주는 React 입문" />
      <S.Title>학번을 입력해주세요.</S.Title>
      <S.StudentIdContainer>
        {studentId.map((index) => (
          <S.StudentId key={index}>
            {enteredNumbers[index - 1] || ''}
          </S.StudentId>
        ))}
      </S.StudentIdContainer>
      <S.NumberList>
        {numberList1.map((number, index) => (
          <S.Number key={index} onClick={() => handleNumberClick(number)}>
            {number}
          </S.Number>
        ))}
        <S.Number key="backspace" onClick={() => handleNumberClick('<')}>
          {'<'}
        </S.Number>

        {numberList2.map((number, index) => (
          <S.Number key={index} onClick={() => handleNumberClick(number)}>
            {number}
          </S.Number>
        ))}
        <S.Number key="zero" onClick={() => handleNumberClick('0')}>
          {'0'}
        </S.Number>
        <S.ConfirmNumber
          key="confirm"
          onClick={() => handleNumberClick('확인')}
          isSevenDigits={isSevenDigits}
        >
          {'확인'}
        </S.ConfirmNumber>
      </S.NumberList>
    </S.Container>
  );
};

export default AttendancePage;
