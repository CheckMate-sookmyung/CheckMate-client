import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border: 1px solid red; // 임시코드
`;

export const OutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 100px;
  gap: 120px;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 60px;
`;

export const StudentIdContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 40px 0;
`;

export const StudentId = styled.div`
  --box-size: 120px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: solid 3px #d9d9d9;
  width: var(--box-size);
  height: var(--box-size);
  font-size: 120px;
  font-weight: 600;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  border-collapse: collapse;
  border-radius: 20px;
`;

export const Dial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-width: 1px 0 0 1px;
  height: 240px;
  font-size: 80px;
  font-weight: 600;
  color: #636363;
  &:nth-child(3n) {
    border-right: 1px solid black;
  }
  &:nth-last-child(-n + 3) {
    border-bottom: 1px solid black;
  }
`;

export const SpecialDial = styled(Dial)`
  color: #c0c0c0;
`;

export const NextBtn = styled.div`
  background-color: ${({ isSevenDigits }) =>
    isSevenDigits ? '#0075FF' : '#c8c8c8'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  color: white;
  font-size: 80px;
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
