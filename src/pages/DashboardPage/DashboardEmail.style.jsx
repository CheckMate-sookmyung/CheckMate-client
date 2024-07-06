import styled from 'styled-components';

export const DashboardEmail = styled.div`
  padding: 76px;
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SaveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2253ff;
  border-radius: 8px;
  border: none;
  padding: 9px 18px;
  font-weight: 600;
  font-size: 14px;
  height: 40px;
  color: #ffffff;
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background: #4d74ff;
  }
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const ContentDesc = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
`;

// 이메일 옵션 (라디오 버튼)
export const OptionContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  gap: 10px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
`;

export const RadioButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  margin: 0;
  border: 1px solid #2253ff;
  border-radius: 50px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:checked::before {
    width: 10px;
    height: 10px;
    background: #4e75ff;
    border-radius: 50%;
  }
`;

export const OptionTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: #2c2d2e;
`;
