import React, { useState } from 'react';
import * as S from './AttendanceStudentIdPage.style';
import { AttendanceHeader } from '../../components';
import Modal from '../../components/Modal';

const AttendanceStudentIdPage = () => {
  const [enteredNumbers, setEnteredNumbers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const numberList1 = Array.from({ length: 5 }, (_, index) => index + 1);
  const numberList2 = Array.from({ length: 4 }, (_, index) => index + 6);

  const isSevenDigits = enteredNumbers.length === 7;
  const isConfirmEnabled = isSevenDigits;

  const handleNumberClick = (number) => {
    if (number === '<') {
      setEnteredNumbers(enteredNumbers.slice(0, -1));
    } else if (number === '확인' && isConfirmEnabled) {
      openModal();
    } else {
      if (enteredNumbers.length < 7 && number !== '확인') {
        setEnteredNumbers([...enteredNumbers, number]);
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
      <AttendanceHeader event="AI & ML Ops Foundation (입문과정)" />
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
          disabled={!isConfirmEnabled}
        >
          {'확인'}
        </S.ConfirmNumber>
      </S.NumberList>
      {isOpen && <S.ModalOverlay />}
      <Modal
        name="홍길동"
        major="컴과"
        studentId="2110423"
        eventName="즐거운 리액트"
        isOpen={isOpen}
        onClose={closeModal}
      />
    </S.Container>
  );
};

export default AttendanceStudentIdPage;
