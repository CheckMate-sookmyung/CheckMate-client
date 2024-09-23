import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const GraphBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid #aecfff;
  border-radius: 20px;
  padding: 30px;
  position: relative;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

export const TopBadge = styled.div`
  position: absolute;
  top: -20px;
  right: 10%;
  background-color: #e3f2fd;
  color: #1e88e5;
  padding: 10px 30px;
  border-radius: 18px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #90caf9;
  transform: translateX(20%);
`;

export const EventTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
`;

export const AttendanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const AttendancePercentage = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

export const AttendanceLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #323232;
`;

export const ChartWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
