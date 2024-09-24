import { BsThreeDots } from 'react-icons/bs';
import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 30px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const ChartArea = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding-right: 40px;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #323232;
  gap: 10px;
`;

export const LegendCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
`;

export const LegendText = styled.span`
  color: #323232;
  flex-grow: 1;
`;

export const LegendDots = styled(BsThreeDots)`
  font-size: 16px;
  color: #5495f6;
  display: flex;
  align-items: center;
`;

export const LegendPercentage = styled.span`
  font-size: 16px;
  color: #2f7cef;
  display: flex;
  align-items: center;
`;

export const HiddenLegend = styled.div`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MarginBox = styled.div`
  margin: 30px 0;
`;

export const ChartTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0;
`;
