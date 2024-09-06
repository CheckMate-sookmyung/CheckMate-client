import styled from 'styled-components';
import { BREAKPOINTS } from '../../../styles';

export const RegisterFirstPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  width: 100%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  gap: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MainTitle = styled.h1`
  display: inline-block;
  position: relative;
  color: #0d0d0d;
  text-align: left;
  font-size: 20px;
  font-weight: bold;

  & > span {
    color: #2f7cef;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  font-size: 14px;
  font-weight: normal;
  color: #818181;
  text-align: left;
  display: inline-block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 12px;
  }
`;

export const Category = styled.p`
  display: inline-block;
  position: relative;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MainButton = styled.button`
  display: flex;
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
