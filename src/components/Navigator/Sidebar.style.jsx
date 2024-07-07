import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid #ebedf0;
  padding-top: 35px;
  min-width: 180px;
  height: 100%;
`;

export const MenuWrapper = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid #ebedf0;
  padding-bottom: 8px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  box-sizing: border-box;
  transition:
    border-left 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-left: 5px solid #007bff;
  }

  &.active {
    color: #007bff;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  flex-grow: 1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// 출석체크 버튼
export const ButtonWrapper = styled.div`
  margin: 0 auto;
  padding: 8px 0;
`;

export const AttendanceBtn = styled.button`
  border-radius: 8px;
  border: none;
  background: #007bff;
  padding: 13px 22px;
  height: 42px;
  min-width: 99px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #ffffff;

  &:hover {
    background: #2b90fc;
  }
`;
