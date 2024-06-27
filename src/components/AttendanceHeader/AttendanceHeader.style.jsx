import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

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

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const CloseIconAnchor = styled.a`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
