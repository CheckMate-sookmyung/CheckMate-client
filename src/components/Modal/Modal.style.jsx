import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 800px;
  height: 460px;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 40px;

  & > strong {
    color: #3665df;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Content = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  background-color: #f9f9f9;
  align-items: center;
`;

export const ContentTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
`;

export const ContentDescription = styled.span`
  padding: 0 30px;
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CancelButton = styled.button`
  width: 200px;
  border-radius: 4px;
  background: #838383;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  height: 62px;
`;

export const CompletedButton = styled.button`
  width: 300px;
  height: 62px;
  border-radius: 4px;
  background: #2e69ff;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`;
