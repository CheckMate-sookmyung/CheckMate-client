import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const AttendanceSignPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('/img/background-attendance.svg');
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
  padding: 30px 20px;
  gap: 20px;
`;

export const StudentInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  & > strong {
    color: #2f7cef;
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  padding: 12px 26px;
  background: #2f7cef;
  font-size: 20px;
  border: 1px solid #aecfff;
  color: #fff;
  white-space: nowrap;

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
  color: var(--Black-2, #323232);
  text-align: center;
  font-size: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    top: 30px;
    font-size: 16px;
  }
`;

export const SignatureCanvasContainer = styled.div`
  /* width: 100%; */
  /* max-width: 900px; */
  height: auto;
  aspect-ratio: 900 / 300;
  flex-grow: 1;

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
  justify-content: center;
  width: 100%;
  gap: 20px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
    gap: 10px;
  }
`;

export const CancelButton = styled.button`
  width: 260px;
  height: 62px;
  border-radius: 10px;
  background: var(--LG-3, #f2f2f2);
  font-size: 28px;
  font-weight: 600;
  color: var(--DG-2, #818181);

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
    height: 50px;
    font-size: 24px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 40px;
    font-size: 20px;
  }
`;

export const CompletedButton = styled.button`
  width: 360px;
  height: 62px;
  border-radius: 10px;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #aecfff;
      color: #ffffff;
      cursor: not-allowed;
    `}

  ${(props) =>
    !props.disabled &&
    css`
      background: #2f7cef;
      cursor: pointer;
    `}

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
    height: 50px;
    font-size: 24px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
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
