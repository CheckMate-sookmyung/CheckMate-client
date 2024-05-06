import styled from 'styled-components';

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

export const SignPad = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const CompletedButton = styled.button`
  width: 300px;
  height: 62px;
  margin: 40px auto;
  border-radius: 4px;
  background: linear-gradient(150deg, #3665df 10%, #91b2f1);
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`;
