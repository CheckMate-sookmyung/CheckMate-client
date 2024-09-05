import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const FlexWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 15px;
  align-items: center;
`;

export const Choicebox = styled.div`
  width: 380px;
  height: 298px;
  margin: 20px;
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#2F7CEF' : '#F2F2F2')};
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#323232')};
  filter: ${({ isSelected }) =>
    isSelected ? 'grayscale(0%)' : 'grayscale(100%)'};
  border-radius: 16px;
  transition: all 0.5s;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 280px;
  }
`;

export const CustomImage = styled.img`
  position: relative;
  max-width: 70%;
  overflow: hidden;
  height: 168px;
`;

export const Category = styled.p`
  position: relative;
  display: inline-block;
  font-size: 28px;
  font-weight: 600;
  text-align: left;
`;

export const CategoryMini = styled.p`
  position: relative;
  font-size: 14px;
  text-align: left;
  display: inline-block;
`;
