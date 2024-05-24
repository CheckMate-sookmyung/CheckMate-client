import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 160px;
  padding: 10px;
  background: #0075ff;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
`;

export const CloseIconAnchor = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 40px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
