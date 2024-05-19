import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  font-size: 32px;
  font-weight: 700;
`;

export const CompletedButton = styled.button`
  width: 300px;
  height: 62px;
  margin: 40px auto;
  border-radius: 4px;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #c8c8c8;
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
