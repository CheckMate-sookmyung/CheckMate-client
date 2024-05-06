import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding: 10px;
  background: linear-gradient(150deg, #3665df 30%, #91b2f1);
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 40px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
