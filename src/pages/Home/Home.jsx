import React from 'react';
import * as S from './Home.Style';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container src="/img/HomeBackground.png" />
        {/* 기본 화면 */}
        <S.FirstLayer>
          <S.ComponentsWrapper>
            <S.Logo src="/img/CheckMateWhite.svg" />
            <S.Description>행사 관리 시스템을 더 쉽고 간편하게,</S.Description>
            <S.Description>언제 어디서나 체크메이트와 함께</S.Description>
            <S.ButtonWrapper>
              <S.GreenButton>행사 등록하러 가기</S.GreenButton>
              <S.WhiteButton>행사 보러가기</S.WhiteButton>
            </S.ButtonWrapper>
          </S.ComponentsWrapper>
        </S.FirstLayer>
        {/* 체크메이트 이력 */}
        <S.SecondLayer>
          <S.GreenCheckImg src="/img/GreenCheck.svg" />
          <S.Description style={{ textAlign: 'center' }}>
            체크메이트와 함께 즐긴
            <br /> 모든 행사들이예요
          </S.Description>
          <S.EmptyBox />
          <S.ButtonWrapper>
            <S.BlueBigCard>
              체크메이트에서
              <br /> 열린 행사 수<S.BoldNum>514개</S.BoldNum>
            </S.BlueBigCard>
            <S.WhiteBigCard>
              체크메이트에서
              <br /> 출석을 완료한 이용자
              <S.BoldNum style={{ color: 'black' }}>1028명</S.BoldNum>
            </S.WhiteBigCard>
          </S.ButtonWrapper>
        </S.SecondLayer>
        {/* 온보딩 */}
        <S.Layer>
          <S.ImgBox src="/img/FirstOnboarding.png" />
          <div>
            <S.OnboardTitle>
              이제 체크메이트로
              <br /> 행사를 쉽고 간편하게 관리하세요
            </S.OnboardTitle>
            <div>
              <S.FlexBox style={{ gap: '16px' }}>
                <S.BlueCheck src="/img/BlueCheck.svg" />
                <S.OnboardContent>
                  체크메이트로 자동화된 프로세스를 도입하세요
                </S.OnboardContent>
              </S.FlexBox>
              <S.FlexBox style={{ gap: '16px' }}>
                <S.BlueCheck src="/img/BlueCheck.svg" />
                <S.OnboardContent>
                  학번 입력만으로 출석을 체크하여 개인 정보 보호를 강화하세요
                </S.OnboardContent>
              </S.FlexBox>
              <S.FlexBox style={{ gap: '16px' }}>
                <S.BlueCheck src="/img/BlueCheck.svg" />
                <S.OnboardContent>
                  출석 명단과 행사 참여 통계를 통해 행사 효과를 분석하세요
                </S.OnboardContent>
              </S.FlexBox>
              <S.BlueButton>무료로 시작하기</S.BlueButton>
            </div>
          </div>
        </S.Layer>
        <S.Layer>
          <div>
            <S.OnboardTitle>간편하게 등록하는 행사</S.OnboardTitle>
            <S.OnboardContent>
              행사가 온 오프라인으로 열리는지 선택하고 <br /> 선택한 이벤트의
              제목과 날짜를 선택하면 행사 페이지를 완성할 수 있어요
            </S.OnboardContent>
            <S.SeeMore>더 알아보기</S.SeeMore>
          </div>
          <S.ImgBox src="/img/SecondOnboarding.png" />
        </S.Layer>
        <S.Layer>
          <S.ImgBox src="/img/ThirdOnboarding.png" />
          <div>
            <S.OnboardTitle>손쉬운 출석 관리</S.OnboardTitle>
            <S.OnboardContent>
              별도의 번거로운 절차 없이 학번 또는 전화번호 뒷자리를 입력해
              <br />
              행사에 출석체크할 수 있어요
            </S.OnboardContent>
            <S.SeeMore>더 알아보기</S.SeeMore>
          </div>
        </S.Layer>
        <S.Layer>
          <S.ImgBox src="/img/FourthOnboarding.png" />
          <div>
            <S.OnboardTitle>한눈에 살펴보는 그래프</S.OnboardTitle>
            <S.OnboardContent>
              체크메이트에서 제공하는 그래프를 통해
              <br /> 행사 통계를 한눈에 살펴보고 데이터를 관리할 수 있어요
            </S.OnboardContent>
            <S.SeeMore>더 알아보기</S.SeeMore>
          </div>
        </S.Layer>
        <Footer />
      </S.Wrapper>
    </>
  );
};

export default HomePage;
