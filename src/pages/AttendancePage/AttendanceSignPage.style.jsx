import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  font-size: 40px;

  & > strong {
    color: #0075ff;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 30px;
    padding: 20px;
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  gap: 16px;
  padding-bottom: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 442px;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  background-color: #f9f9f9;
  align-items: center;
  border-radius: 4px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    height: 40px;
    padding: 6px;
  }
`;

export const ContentTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  padding: 0 10px;
  position: relative;

  &::after {
    content: '|';
    position: absolute;
    right: -15px;
    color: #000;
    font-weight: 400;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

export const ContentDescription = styled.span`
  padding: 0 30px;
  font-size: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 16px;
  }
`;

// 서명
export const CanvasWrapper = styled.div`
  position: relative;
`;

export const SignatureResetButton = styled.button`
  position: absolute;
  padding: 20px;
  right: 0px;
`;

export const CanvasPlaceholder = styled.p`
  position: absolute;
  width: max-content;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #838383;
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    top: 30px;
    font-size: 16px;
  }
`;

export const SignatureCanvasContainer = styled.div`
  width: 900px;
  /* max-width: 900px; */
  height: auto;
  aspect-ratio: 900 / 400;

  canvas {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px;
    max-width: 100%;
    aspect-ratio: 3 / 2;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0 40px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    gap: 10px;
    padding: 10px;
    margin: 10px 0 20px;
  }
`;

export const CancelButton = styled.button`
  width: 260px;
  height: 62px;
  border-radius: 4px;
  background: #838383;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    height: 40px;
    font-size: 20px;
  }
`;

export const CompletedButton = styled.button`
  width: 360px;
  height: 62px;
  border-radius: 4px;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #bddbff;
      color: #ffffff;
      cursor: not-allowed;
    `}

  ${(props) =>
    !props.disabled &&
    css`
      background: #0075ff;
      cursor: pointer;
    `}

    @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    height: 40px;
    font-size: 20px;
  }
`;

// 모달 열릴 때 회색 불투명한 레이어 스타일
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
