import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  font-size: 32px;
  font-weight: 700;
`;

export const StudentIdContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StudentId = styled.div`
  --box-size: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: var(--box-size);
  height: var(--box-size);
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 28px;
  font-weight: 600;
`;

export const NumberList = styled.div`
  display: flex;
  margin: 50px auto;
  flex-wrap: wrap;
  gap: 2px;
  max-width: calc(150px * 6 + 10px * 5);
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(16.666% - 2px);
  height: 150px;
  background-color: #3867e0;
  font-size: 50px;
  font-weight: 600;
  color: #ffffff;
`;

export const ConfirmNumber = styled(Number)`
  background-color: ${({ isSevenDigits }) =>
    isSevenDigits ? '#1040b9' : '#888888'};
  color: white;
  font-size: 40px;
`;
