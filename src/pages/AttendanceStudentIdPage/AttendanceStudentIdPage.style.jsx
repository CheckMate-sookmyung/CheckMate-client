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
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  font-size: 32px;
  /* color: #636363; */
`;

export const StudentIdContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
`;

export const StudentId = styled.div`
  --box-size: 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: solid 3px #d9d9d9;
  width: var(--box-size);
  height: var(--box-size);
  border-radius: 4px;
  font-size: 50px;
  font-weight: 600;
`;

export const DialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 50px auto;
  width: 100%;
  gap: 2px;
  border-radius: 20px;
`;

export const Dial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 150px;
  font-size: 40px;
  color: #636363;
`;

export const NextBtn = styled.div`
  background-color: ${({ isSevenDigits }) =>
    isSevenDigits ? '#0075FF' : '#c8c8c8'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
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
