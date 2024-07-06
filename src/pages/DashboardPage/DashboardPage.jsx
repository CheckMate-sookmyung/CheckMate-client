import * as S from './DashboardPage.style';

export default function DashboardPage() {
  return (
    <S.DashboardPage>
      <S.TopContainer>
        <S.EventTitle>체크메이트 해커톤</S.EventTitle>
        <S.ButtonContainer>
          <S.EditBtn>행사 수정</S.EditBtn>
          <S.DeleteBtn>행사 삭제</S.DeleteBtn>
        </S.ButtonContainer>
      </S.TopContainer>

      <S.ContentContainer>
        <S.OverviewContainer>
          <S.ContentBox>
            <S.ContentTitle>QR 코드</S.ContentTitle>
          </S.ContentBox>
          <S.OverviewWrapper>
            <S.ContentBox>
              <S.ContentTitle>행사 개요</S.ContentTitle>
            </S.ContentBox>
            <S.ContentBox>
              <S.ContentTitle>담당자</S.ContentTitle>
            </S.ContentBox>
            <S.ContentBox>
              <S.ContentTitle>설문조사 링크</S.ContentTitle>
            </S.ContentBox>
          </S.OverviewWrapper>
        </S.OverviewContainer>

        <S.ProgressContainer>
          <S.ContentBox>
            <S.ContentTitle>전체 참석률</S.ContentTitle>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentTitle>진행 회차</S.ContentTitle>
          </S.ContentBox>
        </S.ProgressContainer>
      </S.ContentContainer>
    </S.DashboardPage>
  );
}
