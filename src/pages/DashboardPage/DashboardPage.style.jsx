import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../styles';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6';

export const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left: 1px solid #ebedf0;
  padding: 50px;
  gap: 10px;

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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const EventTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EventTitle = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: var(--gray-400, #212121);
`;

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 4px 10px;
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
  gap: 10px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
  background: var(--LG-4, #f8f8f8);
  width: 100%;
  border-radius: 10px;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--gray-200, #d9d9d9);
`;

export const ContentTitle = styled.h3`
  line-height: 19px;
  color: var(--gray-400, #212121);
  font-weight: bold;
  font-size: 16px;
`;

export const AddContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 4px 10px;
  color: #2253ff;
  font-weight: 600;
  font-size: 12px;
  border: 1px solid var(--blue-400, #2253ff);
`;

export const ContactIconInputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContactInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const ContactInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 14px;
`;

export const ContactCheck = styled.p`
  padding: 0 6px;
  font-size: 12px;
  color: #ff6b6b;
`;

export const ContactIconTextWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContactIconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 7px;
`;

const iconStyle = css`
  color: var(--gray-300, #636363);
`;

export const StyledPhoneIcon = styled(FaPhone)`
  ${iconStyle}
`;
export const StyledEnvelopeIcon = styled(FaEnvelope)`
  ${iconStyle}
`;
export const StyledUserIcon = styled(FaUser)`
  ${iconStyle}
`;

export const ContactText = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding-top: 7px;
  line-height: 14px;
  color: var(--gray-300, #636363);
  font-size: 14px;
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

export const EventType = styled.span`
  padding-right: 12px;
  margin-right: 12px;
  border-right: 1px solid var(--gray-200, #d9d9d9);
  font-weight: 600;
  font-size: 14px;
  color: var(--blue-400, #0075ff);
`;

export const EventTarget = styled.span`
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

// 행사 커버 이미지
export const PosterImageContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
  }
`;

// 평균 참석 인원, 행사 진행 회차
export const ProgressContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px;
  border-radius: 10px;
  width: 100%;
  background: var(--LG-4, #f8f8f8);
`;

export const ProgressText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProgressTitle = styled.h2`
  color: var(--DG-2, #818181);
`;

export const ProgressDescription = styled.p`
  font-size: 14px;
  color: var(--DG-2, #818181);
`;

export const ProgressNumber = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  color: var(--DG-2, #818181);
  font-size: 20px;
  gap: 6px;

  & > em {
    font-size: 40px;
    font-style: normal;
    position: relative;
    transform: translateY(8px);
    font-weight: 600;
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
