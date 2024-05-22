import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  padding: 30px;
`;

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
  gap: 20px;
`;

export const StudentId = styled.div`
  --box-size: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: var(--box-size);
  height: var(--box-size);
  border-radius: 4px;
  background-color: #f0f0f0;
  font-size: 36px;
  font-weight: 600;
`;

export const DialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 50px auto;
  flex-wrap: wrap;
  gap: 2px;
  max-width: calc(150px * 6 + 10px * 5);
`;

export const Dial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #3867e0;
  font-size: 50px;
  font-weight: 600;
  color: #ffffff;
`;

export const ConfirmBtn = styled(Number)`
  background-color: ${({ isSevenDigits }) =>
    isSevenDigits ? '#1040b9' : '#c8c8c8'};
  color: white;
  font-size: 40px;
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
