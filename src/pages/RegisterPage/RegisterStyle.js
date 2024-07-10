import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100vw;
`;

export const SubContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  padding-top: 10px;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 100%;
    padding: 20px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 10px 0;
`;

export const MainFont = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0;
  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 22px;
  }
`;

export const SubFont = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #636363;
  margin: 10px 0;
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

//RegisterFirst
export const Choicebox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  filter: ${({ isSelected }) =>
    isSelected ? 'grayscale(0%)' : 'grayscale(100%)'};
  border: ${({ isSelected }) =>
    isSelected ? '2px solid black' : '2px solid #d9d9d9'};
  border-radius: 16px;
  transition: all 0.5s;
  cursor: pointer;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const EventRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  padding: 10px;
  color: blue;
`;

export const CustomImage = styled.img`
  width: 100%;
`;

//RegisterSecond
export const PrimaryInput = styled.input`
  width: 70%;
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
