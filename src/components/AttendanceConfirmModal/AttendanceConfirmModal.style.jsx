import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  width: 800px;
  height: 460px;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const Content = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  font-size: 40px;

  & > strong {
    color: #3665df;
  }
`;

export const ConfirmButton = styled.button`
  width: 300px;
  height: 62px;
  border-radius: 4px;
  background: linear-gradient(150deg, #3665df 10%, #91b2f1);
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`;
