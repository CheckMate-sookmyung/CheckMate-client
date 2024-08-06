import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
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
  padding: 15px;
  color: blue;
`;

export const CustomImage = styled.img`
  width: 100%;
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

//RegisterThird

export const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 6px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DateTimeInput = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 6px;
  width: 90px;
  height: 14px;
  font-size: 16px;
  text-align: center;

  :focus {
    border: 1px solid #ccc;
    outline: none;
  }
`;

export const Arrow = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoDeleteIconWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

export const InfoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;

  &:hover::after {
    content: '최소 1개 이상의 일정을 등록해주세요.';
    position: absolute;
    top: 80%;
    right: 0;
    margin-top: 5px;
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 66%;
    right: 50%;
    transform: translateX(50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

export const DeleteIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const AddTimeWrapper = styled.div``;

export const AddTimeBtn = styled.button`
  color: #2253ff;
  font-weight: 600;
  padding: 6px;
`;
