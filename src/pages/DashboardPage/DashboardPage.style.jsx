import styled from 'styled-components';

export const DashboardPage = styled.div`
  background: rgb(242, 243, 245);
  min-height: 100%;
  padding: 76px;
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d2d7db;
  border-radius: 8px;
  border: none;
  padding: 9px 18px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  height: 40px;
  color: #ffffff;
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #c4c9cd;
  }
`;

export const EditBtn = Button;
export const DeleteBtn = Button;

export const EventTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: rgb(25, 25, 26);
  margin-bottom: 32px;
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OverviewContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ContentBox = styled.div`
  display: flex;
  padding: 26px 23px;
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
`;

export const ContentTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #2c2d2e;
`;

export const ProgressContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
