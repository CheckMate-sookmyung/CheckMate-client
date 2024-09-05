import * as S from './Table.style';

return (
  <S.TableContainer>
    <S.Table>
      <thead>
        <tr>
          <S.TableHeader>순위</S.TableHeader>
          <S.TableHeader>이름</S.TableHeader>
          <S.TableHeader>학과</S.TableHeader>
          <S.TableHeader>학번</S.TableHeader>
          <S.TableHeader>학년</S.TableHeader>
          <S.TableHeader>휴대폰번호</S.TableHeader>
          <S.TableHeader>이메일 주소</S.TableHeader>
          <S.TableHeader>참석행사</S.TableHeader>
          <S.TableHeader>참석률</S.TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <S.TableData>1</S.TableData>
          <S.TableData>강동훈</S.TableData>
          <S.TableData>야놀자</S.TableData>
          <S.TableData>0</S.TableData>
          <S.TableData>-</S.TableData>
          <S.TableData>010-1234-5678</S.TableData>
          <S.TableData>checkmate이메일</S.TableData>
          <S.TableData>11</S.TableData>
          <S.TableData>90%</S.TableData>
        </tr>
      </tbody>
    </S.Table>
  </S.TableContainer>
);

export default AttendeeTable;
