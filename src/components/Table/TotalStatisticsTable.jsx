import * as S from './Table.style';

const TotalStatisticTable = ({ studentData }) => {
  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeader>순위</S.TableHeader>
            <S.TableHeader>이름</S.TableHeader>
            <S.TableHeader>학과</S.TableHeader>
            <S.TableHeader>학번</S.TableHeader>
            {/* <S.TableHeader>학년</S.TableHeader> */}
            {/* <S.TableHeader>휴대폰번호</S.TableHeader> */}
            {/* <S.TableHeader>이메일 주소</S.TableHeader> */}
            <S.TableHeader>참석행사</S.TableHeader>
            <S.TableHeader>참석률</S.TableHeader>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={student.studentNumber}>
              <S.TableData>{index + 1}</S.TableData>
              <S.TableData>{student.studentName}</S.TableData>
              <S.TableData>{student.studentMajor}</S.TableData>
              <S.TableData>{student.studentNumber}</S.TableData>
              {/* <S.TableData>{student.grade || '-'}</S.TableData> */}
              {/* <S.TableData>{student.phoneNumber || '-'}</S.TableData> */}
              {/* <S.TableData>{student.studentEmail}</S.TableData> */}
              <S.TableData>
                <S.AttendedCount>{student.attendanceCount}</S.AttendedCount>
              </S.TableData>
              <S.TableData>{student.attendanceRate}%</S.TableData>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export default TotalStatisticTable;
