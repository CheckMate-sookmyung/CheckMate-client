import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const RegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  width: 100%;
  border-left: 1px solid #ebedf0;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px;
  }
`;

export const RegisterCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleDownButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  position: relative;
  color: #0d0d0d;
  text-align: left;
  font-size: 24px;
  font-weight: bold;

  & > span {
    color: #2f7cef;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 20px;
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

export const BlueButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-left: -10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const DownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dddee0;
  padding: 9px 18px;
  font-weight: 600;
  font-size: 14px;
  height: 30px;
  color: #4e75ff;
  cursor: pointer;
  gap: 6px;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #4e75ff;
    color: #fff;
  }
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
