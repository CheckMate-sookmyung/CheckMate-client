import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';

export const DashboardPage = styled.div`
  flex-grow: 1;
  border-left: 1px solid #ebedf0;
  padding: 50px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 20px;
  }
`;

// 행사 타이틀 + 버튼
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-bottom: 10px;
  }
`;

export const EventTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EventTitle = styled.h1`
  display: flex;
  color: var(--Black-0, #000);
  font-size: 32px;
  font-weight: 600;
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 4px 10px;
  width: 58px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${(props) =>
    props.status === '종료'
      ? '#ff6b6b'
      : props.status === '진행중'
        ? 'var(--blue-400, #0075ff)'
        : '#ffa726'};
  border: 1px solid
    ${(props) =>
      props.status === '종료'
        ? '#ff6b6b'
        : props.status === '진행중'
          ? 'var(--blue-400, #0075ff)'
          : '#ffa726'};
`;

// 행사 정보
export const ContentContainer = styled.div`
  display: flex;
  gap: 55px;
  margin-bottom: 80px;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  flex: 1;
`;

export const ContentBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentBoxTitle = styled.h2`
  color: var(--Black-1, #0d0d0d);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: var(--LG-4, #f8f8f8);
  padding: 27px 31px;
  gap: 36px;
`;

export const ContentBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentBoxSubTitle = styled.h3`
  color: var(--DG-2, #818181);
  font-size: 16px;
  font-weight: 400;
`;

export const ContentBoxDetail = styled.span`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  color: var(--Black-2, #323232);
  font-size: 20px;
  font-weight: 500;
`;

export const ProgressBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background: var(--blue-0, #2f7cef);
  padding: 24px 31px;
  gap: 2px;
`;

export const ProgressTitle = styled.h3`
  display: flex;
  color: var(--White, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 33px;
`;

export const ProgressDesc = styled.p`
  color: var(--blue-4, #accdff);
  font-size: 20px;
  font-weight: 500;
`;

export const ProgressNumber = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: var(--White, #fff);
  font-size: 32px;
  font-weight: 600;

  strong {
    font-size: 64px;
    font-weight: 600;
    position: relative;
    top: 8px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  height: 100%;

  img {
    display: block;
    width: 70%;
    object-fit: contain;
  }
`;

// 담당자 tooptip
export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.div`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 0;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 20px;
    margin-left: -5px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }
`;

// 버튼
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
