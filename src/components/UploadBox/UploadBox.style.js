import { BiSolidDownArrowSquare } from 'react-icons/bi';
import styled from 'styled-components';

//업로드 박스 + 아이콘
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background-color: #fff;
  background-color: #f8f8f8;
  padding: 20px;
  cursor: pointer;
  color: #2f7cef;

  &.active {
    background-color: #2f7cef;
    color: #ffffff;
  }
  &:hover {
    border-color: #2f7cef;
  }
`;

export const StyledIcon = styled(BiSolidDownArrowSquare)`
  color: #2f7cef;
  font-size: 50px;
  margin: 20px;

  &.active {
    color: #ffffff;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

// 파일 O
export const PreviewWrapper = styled.div`
  display: flex;
  text-align: left;
  height: 100%;
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

export const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 45%;
  height: 100%;
`;

export const PreviewLabel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #2f7cef33;
  border: 1px solid white;
  box-sizing: border-box;
  height: 32px;
  width: 110px;
  color: white;
`;

export const PreviewMsg = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

// 파일 O > 미리보기
export const SeePreviewBox = styled.div`
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #edf5ff;
  border: 1px #aecfff;
  box-sizing: border-box;
  height: 573px;
  width: 600px;
`;

export const PreviewImg = styled.img``;
