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
  flex-direction: column;
  padding: 22px;
  background: #ffffff;
  width: 100%;
  border-radius: 10px;
`;

export const ContentTitle = styled.h3`
  width: 100%;
  padding-bottom: 8px;
  line-height: 19px;
  border-bottom: 1px solid #ebedf0;
  color: #2c2d2e;
  font-weight: bold;
  font-size: 16px;
`;

export const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  gap: 10px;
`;

export const ContentTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
`;

export const ContentText = styled.p`
  border: none;
  line-height: 14px;
  font-size: 14px;
  color: #828282;
`;

export const EventTypeWrapper = styled.div`
  display: flex;
`;

export const EventType = styled.p`
  padding-right: 12px;
  margin-right: 12px;
  border-right: 1px solid #e1e3e6;
  font-weight: 600;
  font-size: 14px;
  color: #4e75ff;
`;

export const EventVenue = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #4e75ff;
`;

export const EventDateWrapper = styled.div`
  display: flex;
`;

export const EventDate = styled.p`
  font-size: 14px;
`;

export const QrCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;

  img {
    display: block;
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
  }
`;

export const CopyBtn = styled.button`
  margin-left: auto;
  border-radius: 4px;
  border: none;
  background: #7a98ff;
  width: 60px;
  height: 22px;
  line-height: 20px;
  color: #ffffff;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background: #4e75ff;
  }
`;

export const CopyMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #4e75ff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// 진행 현황
export const ProgressContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const ProgressBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 23px;
  background: #ffffff;
  width: 100%;
  border-radius: 10px;
  gap: 18px;
`;

export const ProgressIcon = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4e75ff;
  align-items: center;
  border-radius: 6px;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: #ffffff;
  font-size: 32px;
`;

export const ProgressContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProgressTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: #4e75ff;
  margin-bottom: 2px;
`;

export const ProgressText = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #4f4f4f;
`;
