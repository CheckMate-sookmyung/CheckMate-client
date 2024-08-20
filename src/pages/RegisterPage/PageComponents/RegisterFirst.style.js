import styled from 'styled-components';
import { BREAKPOINTS } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100vw;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  align-items: start;
  padding: 28px 0;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
    padding: 20px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  height: fit-content;
  padding: 10px 0;
`;

export const MainFont = styled.p`
  position: relative;
  font-size: 28px;
  line-height: 38px;
  font-weight: 600;
  font-family: Pretendard;
  color: #0d0d0d;
  text-align: left;
  display: inline-block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
  }
`;

export const Category = styled.p`
  position: relative;
  display: inline-block;
  font-size: 28px;
  font-weight: 600;
  font-family: Pretendard;
  text-align: left;
`;

export const CategoryMini = styled.p`
  position: relative;
  font-size: 14px;
  font-family: Pretendard;
  text-align: left;
  display: inline-block;
`;

export const SubFont = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: 500;
  font-family: Pretendard;
  /* color: #323232; */
  text-align: left;
  display: inline-block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
`;

export const MainButton = styled.button`
  border-radius: 10px;
  background-color: #f2f2f2;
  width: 212px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 28px;
  box-sizing: border-box;
  text-align: left;
  font-size: 24px;
  color: #818181;
  font-family: Pretendard;
`;

//RegisterFirst
export const Choicebox = styled.div`
  width: 478px;
  height: 298px;
  margin: 20px;
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
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 15px;
  align-items: center;
`;

export const EventRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  padding: 10px;
  color: blue;
`;

export const CustomImage = styled.img`
  position: relative;
  max-width: 70%;
  overflow: hidden;
  height: 168px;
`;
