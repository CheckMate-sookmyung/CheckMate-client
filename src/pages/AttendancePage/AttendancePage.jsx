import * as S from './AttendancePage.style';

const AttendancePage = () => {
  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const numberList1 = Array.from({ length: 5 }, (_, index) => index + 1);
  const numberList2 = Array.from({ length: 4 }, (_, index) => index + 6);

  return (
    <S.Container>
      <S.Title>학번을 입력해주세요.</S.Title>
      <S.StudentIdContainer>
        {studentId.map((number) => (
          <S.StudentId key={number}>{}</S.StudentId>
        ))}
      </S.StudentIdContainer>
      <S.NumberList>
        {numberList1.map((number, index) => (
          <S.Number key={index}>{number}</S.Number>
        ))}
        <S.Number key="backspace">{'<'}</S.Number>
        {numberList2.map((number, index) => (
          <S.Number key={index}>{number}</S.Number>
        ))}
        <S.Number key="confirm">{'0'}</S.Number>
        <S.ConfirmNumber key="confirm">{'확인'}</S.ConfirmNumber>
      </S.NumberList>
    </S.Container>
  );
};

export default AttendancePage;
