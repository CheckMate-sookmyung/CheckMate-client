import * as S from './Home.Style';
import { Button, TopNavigation, Footer } from '@/components';
import { Link } from 'react-router-dom';
import { PageLayout } from '@/Layout';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/axios';
import AnimatedNumbers from 'react-animated-numbers';

const HomePage = () => {
  const [eventCount, setEventCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState(0);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/v1/home/event`);
        setEventCount(data);
      } catch ({ status }) {
        return;
      }
    };

    const getAttendanceCountData = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/v1/home/attendance`);
        setAttendanceCount(data);
      } catch ({ status }) {
        return;
      }
    };

    getEventData();
    getAttendanceCountData();
  }, []);

  return (
    <PageLayout topNavigation={<TopNavigation />}>
      <S.Container>
        <S.Home>
          {/* 기본 화면 */}
          <S.FirstLayer>
            <img src="/img/onboarding-diagram1.svg" />
            <S.ComponentsWrapper>
              <S.Logo>
                <img src="/img/logo-white.svg" alt="" />
              </S.Logo>
              <S.Description>
                행사 관리 시스템을 더 쉽고 간편하게,
              </S.Description>
              <S.Description>언제 어디서나 체크메이트와 함께</S.Description>
              <S.ButtonWrapper>
                <Link to="register">
                  <Button
                    label="행사 등록하러 가기"
                    backgroundColor="#5BFB67"
                    textColor="#323232"
                  />
                </Link>
                <Link to="event">
                  <Button
                    label="행사 보러가기"
                    backgroundColor="#FFF"
                    textColor="#323232"
                  />
                </Link>
              </S.ButtonWrapper>
            </S.ComponentsWrapper>
          </S.FirstLayer>

          {/* 체크메이트 지난 사용자 */}
          <S.SecondLayer>
            <S.SecondLayerTitleWrapper>
              <S.GreenCheckImg src="/img/GreenCheck.svg" />
              <S.SecondLayerTitle>
                체크메이트와 함께 즐긴
                <br /> 모든 행사들이예요
              </S.SecondLayerTitle>
            </S.SecondLayerTitleWrapper>
            <S.CardWrapper>
              <S.BlueCard>
                <S.CardContent>
                  체크메이트에서
                  <br /> 열린 행사 수
                </S.CardContent>
                <S.BoldNum>
                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: 'spring',
                      duration: index + 0.2,
                    })}
                    animateToNumber={eventCount}
                  />
                  <span>개</span>
                </S.BoldNum>
                <S.Character
                  src="/img/character-black-check.svg"
                  alt="캐릭터"
                />
              </S.BlueCard>
              <S.WhiteCard>
                <S.CardContent>
                  체크메이트에서
                  <br /> 출석을 완료한 이용자
                </S.CardContent>
                <S.BoldNum style={{ color: 'black' }}>
                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: 'spring',
                      duration: index + 0.3,
                    })}
                    animateToNumber={attendanceCount}
                  />
                  <span>명</span>
                </S.BoldNum>
              </S.WhiteCard>
            </S.CardWrapper>
          </S.SecondLayer>

          {/* 온보딩 */}
          <S.ThirdLayer>
            <S.ImgBox src="/img/onboarding-1.png" />
            <S.ThirdLayerContent>
              <S.OnboardTitle>
                이제 체크메이트로
                <br /> 행사를 쉽고 간편하게 관리하세요
              </S.OnboardTitle>
              <S.ThirdLayerDecs>
                <S.FlexBox>
                  <S.BlueCheck src="/img/BlueCheck.svg" />
                  <S.OnboardContent>
                    체크메이트로 자동화된 프로세스를 도입하세요
                  </S.OnboardContent>
                </S.FlexBox>
                <S.FlexBox>
                  <S.BlueCheck src="/img/BlueCheck.svg" />
                  <S.OnboardContent>
                    학번 입력만으로 출석을 체크하여 개인 정보 보호를 강화하세요
                  </S.OnboardContent>
                </S.FlexBox>
                <S.FlexBox>
                  <S.BlueCheck src="/img/BlueCheck.svg" />
                  <S.OnboardContent>
                    출석 명단과 행사 참여 통계를 통해 행사 효과를 분석하세요
                  </S.OnboardContent>
                </S.FlexBox>
              </S.ThirdLayerDecs>
              <Link to="event">
                <Button label="무료로 시작하기" />
              </Link>
            </S.ThirdLayerContent>
          </S.ThirdLayer>

          {/* 간편하게 등록하는 행사 */}
          <S.FourthLayer>
            <S.FourthLayerContent>
              <S.OnboardTitle>간편하게 등록하는 행사</S.OnboardTitle>
              <S.OnboardContent>
                행사가 온 오프라인으로 열리는지 선택하고 <br /> 선택한 이벤트의
                제목과 날짜를 선택하면 행사 페이지를 완성할 수 있어요
              </S.OnboardContent>
              <Link to="register">
                <S.SeeMore>더 알아보기 →</S.SeeMore>
              </Link>
            </S.FourthLayerContent>
            <S.ImgBox src="/img/onboarding-2.png" />
          </S.FourthLayer>

          {/* 손쉬운 출석 관리 */}
          <S.FifthLayer>
            <S.BackgroundDiagram src="/img/onboarding-diagram2.svg" />
            <S.ImgBox src="/img/onboarding-3.png" />
            <S.FourthLayerContent>
              <S.OnboardTitle>손쉬운 출석 관리</S.OnboardTitle>
              <S.OnboardContent>
                별도의 번거로운 절차 없이 학번 또는 전화번호 뒷자리를 입력해
                <br />
                행사에 출석체크할 수 있어요
              </S.OnboardContent>
              <Link to="event">
                <S.SeeMore>더 알아보기 →</S.SeeMore>
              </Link>
            </S.FourthLayerContent>
          </S.FifthLayer>

          {/* 한눈에 살펴보는 그래프 */}
          <S.SixthLayer>
            <S.ImgBox src="/img/onboarding-4.png" />
            <S.FourthLayerContent>
              <S.OnboardTitle>한눈에 살펴보는 그래프</S.OnboardTitle>
              <S.OnboardContent>
                체크메이트에서 제공하는 그래프를 통해
                <br /> 행사 통계를 한눈에 살펴보고 데이터를 관리할 수 있어요
              </S.OnboardContent>
              <Link to="stats">
                <S.SeeMore>더 알아보기 →</S.SeeMore>
              </Link>
            </S.FourthLayerContent>
          </S.SixthLayer>
          <Footer />
        </S.Home>
      </S.Container>
    </PageLayout>
  );
};

export default HomePage;
