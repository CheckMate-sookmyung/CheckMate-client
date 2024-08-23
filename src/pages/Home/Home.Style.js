import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  margin: 0 auto;
`;

/* 기본 화면 */
export const FirstLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 700px;
  background-color: var(--blue-0, #2f7cef);

  & > img {
    justify-content: center;
    width: 1300px;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    height: 600px;
    align-items: center;

    & > img {
      width: 1000px;
    }
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 600px;
    align-items: center;

    & > img {
      width: 600px;
    }
  }
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: absolute;
  padding: 20px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    justify-content: center;
    padding-top: 100px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    justify-content: center;
    padding-top: 180px;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 260px;
  height: 236px;

  & > img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 150px;
    height: 110px;
  }
`;

// 체크메이트 지난 사용자
export const SecondLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #2f7cef 6.77%,
    rgba(47, 124, 239, 0) 95.41%
  );
  height: 700px;
  gap: 40px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

export const SecondLayerTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const GreenCheckImg = styled.img`
  width: 48px;
  height: 40px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 32px;
    margin-bottom: 22px;
  }
`;

export const SecondLayerTitle = styled.h2`
  color: var(--White, #fff);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 50px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const BlueCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  background-color: #2f7cef;
  width: 100%;
  max-width: 400px;
  height: 240px;
  color: white;
  padding: 30px;
  font-size: 20px;
  line-height: 33px;
  font-weight: 600;
  text-align: left;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 300px;
    height: 150px;
    font-size: 18px;
    padding: 10px;
    line-height: 25px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 200px;
    height: 150px;
    font-size: 18px;
    padding: 10px;
    line-height: 25px;
  }
`;

export const WhiteCard = styled(BlueCard)`
  background-color: #f2f2f2;
  color: black;
`;

// 온보딩
export const ThirdLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 660px;
  margin: 0 auto;
  padding: 0 30px;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

export const ThirdLayerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 30px;
  }
`;

export const ThirdLayerDecs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

// 간편하게 등록하는 행사
export const FourthLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(47, 124, 239, 0.07);
  height: 660px;
  gap: 30px;
  padding: 0 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

export const FourthLayerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 20px;
`;

// 손쉬운 출석 관리
export const FifthLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 660px;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

export const BackgroundDiagram = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1400px;
  height: 1800px;
  bottom: 200px;
  z-index: -1;
  object-fit: cover;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 1000px;
    height: 1400px;
    bottom: 400px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 500px;
    height: 900px;
    bottom: 600px;
  }
`;

// 한눈에 살펴보는 그래프
export const SixthLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 660px;
  gap: 30px;
  background: linear-gradient(
    180deg,
    rgba(47, 124, 239, 0.07) 0%,
    rgba(255, 255, 255, 0.07) 100%
  );

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

// 기본 화면
export const Description = styled.p`
  width: 462px;
  position: relative;
  font-size: 28px;
  line-height: 45px;
  font-weight: 600;
  color: #fff;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 16px 0;
  max-width: 1100px;
  width: 100%;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

//체크메이트 이력
export const FlexBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const BoldNum = styled.p`
  position: absolute;
  font-size: 60px;
  font-weight: 600;
  color: #fff;
  text-align: left;
  bottom: 42px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 38px;
    bottom: 30px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 30px;
    bottom: 22px;
  }
`;

// 온보딩
export const ImgBox = styled.img`
  display: flex;
  height: 400px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    /* width: 200px; */
    height: 300px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 200px;
    height: 200px;
  }
`;

export const OnboardTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #000;
  line-height: 1.2;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 24px;
  }
`;

export const OnboardContent = styled.p`
  position: relative;
  font-size: 16px;
  color: #323232;
  text-align: left;
  line-height: 1.4;
`;

export const BlueCheck = styled.img`
  position: relative;
`;

export const SeeMore = styled.div`
  width: 93px;
  position: relative;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #2f7cef;
  text-align: left;
  display: inline-block;
  height: 24px;
  cursor: pointer;
`;
