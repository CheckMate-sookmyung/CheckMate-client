import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100vw;
  border: 2px solid red;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border: 3px solid black;
  align-items: start;

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
  border: 2px solid blue;
`;

export const MainFont = styled.p`
  width: 233px;
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

export const SubFont = styled.p`
  position: relative;
  font-size: 20px;
  font-weight: 500;
  font-family: Pretendard;
  color: #323232;
  text-align: left;
  display: inline-block;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 16px;
  }
`;

export const MainButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  margin: 5rem 0 1rem 0;
  color: white;
  background-color: #0075ff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const CategoryFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;

//RegisterFirst
export const Choicebox = styled.div`
  width: 478px;
  position: relative;
  border-radius: 20px;
  background-color: ${({ isSelected }) => (isSelected ? '#2F7CEF' : '#F2F2F2')};
  height: 298px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: center;
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
  border: 1px solid green;
`;

export const EventRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  padding: 15px;
  color: blue;
`;

export const CustomImage = styled.img`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 168px;
`;

//RegisterSecond
export const PrimaryInput = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding-left: 14px;
  box-sizing: border-box;
  font-size: 14px;
  white-space: pre-wrap;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 100%;
  }
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 260px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 16px;
  box-sizing: border-box;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

export const TemplateButton = styled.div`
  width: 130px;
  font-size: 14px;
  text-align: center;
  color: gray;
  cursor: pointer;
`;
