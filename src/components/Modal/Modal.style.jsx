import styled from 'styled-components';

export const ReviewLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 800px;
  height: 460px;
  border: 1px solid black;
  border-radius: 12px;
`;

export const Title = styled.h1`
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Content = styled.div`
  width: 600px;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  background-color: #f9f9f9;
`;

export const ContentTitle = styled.span`
  font-size: 16px;
  padding: 0 10px;
`;

export const ContentDescription = styled.span`
  padding: 0 30px;
  font-size: 16px;
`;

export const CheckContainer = styled.div``;

export const CheckBoxLabel = styled.label`
  position: relative;
  display: flex;
  gap: 10px;
  padding: 30px;
`;

export const CheckBoxInput = styled.input`
  position: absolute;
`;

export const CheckContent = styled.span`
  font-size: 16px;
`;

export const CompletedButton = styled.button`
  width: 300px;
  height: 62px;
  border-radius: 4px;
  background: linear-gradient(150deg, #3665df 10%, #91b2f1);
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;

  &:disabled {
    background: #c8c8c8;
  }
`;
