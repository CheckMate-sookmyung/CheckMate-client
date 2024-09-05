import { BREAKPOINTS } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 300px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    height: 360px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  padding: 64px 30px;
  margin: 0 auto;
  gap: 80px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    gap: 30px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 4px;
  }
`;

export const Category = styled.h4`
  color: var(--Black-2, #323232);
  font-size: 14px;
  font-weight: 600;
`;

export const MemberList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MemberItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-of-type)::after {
    content: '|';
    color: #6b7684;
    margin: 0 8px;
  }

  &:last-of-type {
    &::after {
      content: '';
    }
  }
`;

export const Member = styled.span`
  color: var(--Black-2, #323232);
  font-size: 14px;
`;

// copyright
export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const University = styled.div`
  color: var(--Black-2, #323232);
`;

export const UniversityName = styled.span`
  font-size: 14px;

  &::after {
    content: '|';
    color: var(--Black-2, #323232);
    margin: 0 8px;
  }
`;

export const Address = styled(Member)``;

export const Copyright = styled(Category)``;
