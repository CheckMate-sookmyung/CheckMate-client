import styled from 'styled-components';
import { BREAKPOINTS } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 10px;
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
  text-align: left;
`;

export const CategoryMini = styled.p`
  position: relative;
  font-size: 14px;
  text-align: left;
  display: inline-block;
`;

export const SubFont = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: 500;
  /* color: #323232; */
  text-align: left;
  display: inline-block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 54px;
  padding: 14px 18px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-size: 20px;
  color: #818181;
  text-align: left;
  transition: 0.3s;

  &:hover {
    background-color: #2f7cef;
    color: #f2f2f2;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 15px;
  align-items: center;
`;
