import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.img`
  height: auto;
  width: 100vw;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Layer = styled.div`
  width: 100%;
  height: 870px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 450px;
  }
`;

export const FirstLayer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 380px;
  }
`;

export const SecondLayer = styled(Layer)`
  flex-direction: column;
  height: 700px;
`;

export const EmptyBox = styled.div`
  height: 50px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 20px;
  }
`;

// 기본 화면
export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  position: absolute;
  top: 156px;
  left: 72px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    top: 0;
    left: 30px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  position: relative;
  max-width: 440px;
  overflow: hidden;
  height: 236px;
  margin: 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 150px;
    height: 110px;
    margin: 0;
  }
`;

export const Description = styled.p`
  width: 462px;
  position: relative;
  font-size: 32px;
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
  gap: 30px;
  padding: 10px 0;
  margin: 16px 0;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 20px;
  }
`;

//체크메이트 이력
export const FlexBox = styled.div`
  display: flex;
`;

export const GreenCheckImg = styled.img`
  margin-top: 104px;
  margin-bottom: 52px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-top: 32px;
    margin-bottom: 22px;
  }
`;
export const BlueBigCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  position: relative;
  border-radius: 10px;
  background-color: #2f7cef;
  height: 300px;
  color: white;
  padding: 30px;
  font-size: 24px;
  line-height: 33px;
  font-weight: 600;
  text-align: left;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 200px;
    height: 150px;
    font-size: 18px;
    padding: 10px;
    line-height: 25px;
    font-weight: 600;
    text-align: left;
  }
`;

export const WhiteBigCard = styled(BlueBigCard)`
  background-color: #f2f2f2;
  color: black;
`;

export const BoldNum = styled.p`
  position: absolute;
  font-size: 70px;
  font-weight: 600;
  color: #fff;
  text-align: left;
  bottom: 42px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 40px;
    bottom: 22px;
  }
`;

// 온보딩

export const ImgBox = styled.img`
  display: flex;
  width: 500px;
  height: 500px;
  margin: 0 40px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 200px;
    height: 200px;
  }
`;

export const OnboardTitle = styled.p`
  position: relative;
  font-size: 32px;
  font-weight: 600;
  color: #000;
  text-align: left;
  margin: 40px;
`;

export const OnboardContent = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: 500;
  color: #323232;
  text-align: left;
`;

export const BlueCheck = styled.img`
  position: relative;
`;

export const SeeMore = styled.div`
  width: 93px;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  color: #2f7cef;
  text-align: left;
  display: inline-block;
  height: 24px;
  cursor: pointer;
`;
