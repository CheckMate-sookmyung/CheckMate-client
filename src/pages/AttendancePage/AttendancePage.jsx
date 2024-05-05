import { number } from 'prop-types';
import * as S from './AttendancePage.style';

const AttendancePage = () => {
  const studentId = Array.from({ length: 7 }, (_, index) => index + 1);
  const numberList = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <S.Container>
      <S.Header>학번을 입력해주세요.</S.Header>
      <S.StudentIdContainer>
        {studentId.map((number) => (
          <S.StudentId key={number}>{}</S.StudentId>
        ))}
      </S.StudentIdContainer>
      <S.NumberList>
        {numberList.map((number) => (
          <S.Number key={number}>{number}</S.Number>
        ))}
      </S.NumberList>
    </S.Container>
  );
};

export default AttendancePage;
