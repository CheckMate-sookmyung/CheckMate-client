import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 256px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  padding: 64px 0;
  margin: 0 auto;
  gap: 140px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const GroupWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Category = styled.h4`
  color: var(--Black-2, #323232);
  font-weight: 600;
`;

export const MemberList = styled.ul`
  display: flex;
`;

export const MemberItem = styled.li`
  &:not(:last-of-type) {
    &::after {
      content: '|';
      color: #6b7684;
      margin: 0 8px;
    }
  }
`;

export const Member = styled.span`
  color: var(--Black-2, #323232);
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
  &::after {
    content: '|';
    color: var(--Black-2, #323232);
    margin: 0 8px;
  }
`;

export const Address = styled(Member)``;

export const Copyright = styled(Category)``;
