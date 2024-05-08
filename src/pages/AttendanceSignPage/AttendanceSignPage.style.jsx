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
      background: linear-gradient(150deg, #3665df 10%, #91b2f1);
      cursor: pointer;
    `}
`;
