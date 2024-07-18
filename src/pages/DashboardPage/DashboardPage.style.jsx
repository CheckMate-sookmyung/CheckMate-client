import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrayButton90 } from '../../components';

export const DashboardPage = styled.div`
  flex-grow: 1;
  background: #f2f3f5;
  border-left: 1px solid #ebedf0;
  padding: 50px;
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DeleteEventButton = styled(GrayButton90)`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover::after {
    content: '삭제된 행사는 복구할 수 없습니다.';
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 10px;
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    margin-bottom: 5px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transition:
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const EventTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EventTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: var(--gray-400, #212121);
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff6b6b;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #ff6b6b;
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OverviewContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
  background: #ffffff;
  width: 100%;
  border-radius: 10px;
`;

export const ContentTitle = styled.h3`
  width: 100%;
  padding-bottom: 8px;
  line-height: 19px;
  border-bottom: 1px solid var(--gray-200, #d9d9d9);
  color: var(--gray-400, #212121);
  font-weight: bold;
  font-size: 16px;
`;

export const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  gap: 10px;
`;

export const ContentTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
`;

export const ContentText = styled.p`
  border: none;
  line-height: 14px;
  font-size: 14px;
  color: var(--gray-300, #636363);
`;

export const EventTypeWrapper = styled.div`
  display: flex;
`;

export const EventType = styled.p`
  padding-right: 12px;
  margin-right: 12px;
  border-right: 1px solid var(--gray-200, #d9d9d9);
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-400, #0075ff);
`;

export const EventVenue = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-400, #0075ff);
`;

export const EventDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const EventDate = styled.p`
  font-size: 14px;
  color: var(--gray-300, #636363);
`;

export const QrCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;

  img {
    display: block;
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
  }
`;

export const CopyBtn = styled.button`
  margin-left: auto;
  border-radius: 4px;
  border: none;
  background: var(--blue-400, #0075ff);
  width: 60px;
  height: 22px;
  line-height: 20px;
  color: #ffffff;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background: var(--blue-300, #2c8dff);
  }
`;

export const CopyMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--blue-400, #0075ff);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// 진행 현황
export const ProgressContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const ProgressBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 23px;
  background: #ffffff;
  width: 100%;
  border-radius: 10px;
  gap: 18px;
`;

export const ProgressIcon = styled.div`
  display: flex;
  justify-content: center;
  background: var(--blue-400, #0075ff);
  align-items: center;
  border-radius: 6px;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: var(--gray-100, #f0f0f0);
  font-size: 32px;
`;

export const ProgressContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProgressTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: var(--blue-400, #0075ff);
  margin-bottom: 2px;
`;

export const ProgressText = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: var(--gray-300, #636363);
`;
