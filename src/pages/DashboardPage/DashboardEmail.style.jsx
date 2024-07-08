import styled from 'styled-components';

export const DashboardEmail = styled.div`
  flex-grow: 1;
  border-left: 1px solid #ebedf0;
  padding: 50px;
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

// 탭정보
export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  border: 1px solid #4e75ff;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#4e75ff;' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #4e75ff;
    color: #fff;
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
  overflow: auto;
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
