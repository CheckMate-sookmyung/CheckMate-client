import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 320px;
  height: 220px;
  border-radius: 16px;
  background-color: ${({ isSelected }) => (isSelected ? '#2F7CEF' : '#F2F2F2')};
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#323232')};
  filter: ${({ isSelected }) =>
    isSelected ? 'grayscale(0%)' : 'grayscale(100%)'};
  transition: all 0.5s;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 280px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const CustomImage = styled.img`
  position: relative;
  max-width: 70%;
  overflow: hidden;
  height: 168px;
  margin-bottom: -30px;
`;

export const Category = styled.span`
  position: relative;
  display: inline-block;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`;

export const CategoryMini = styled.span`
  display: inline-block;
  position: relative;
  text-align: left;
  font-size: 14px;
`;
