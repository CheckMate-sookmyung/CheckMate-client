import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 16px;
  /* width: 100%; */
  margin: 20px;
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
`;

export const ContentDescription = styled.span`
  padding: 0 30px;
  font-size: 20px;
`;

export const CanvasWrapper = styled.div`
  position: relative;
`;

export const SignatureResetButton = styled.button`
  position: absolute;
  padding: 20px;
  right: 0px;
`;

export const CanvasPlaceholder = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #838383;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

export const CancelButton = styled.button`
  width: 260px;
  border-radius: 4px;
  height: 62px;
  background: #838383;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
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
