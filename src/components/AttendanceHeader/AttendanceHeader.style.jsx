import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 45px 0 40px;
  font-size: 32px;
  font-weight: 700;
  color: var(--Black-0, #000);

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 26px;
    text-align: center;
    word-break: keep-all;
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
  /* gap: 20px; */
`;

export const Title = styled.h1`
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
  font-size: 48px;
  font-weight: 600;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 14px;
    background-color: #7cff69;
    z-index: -1;
  }

  & > span {
    color: var(--blue-0, #2f7cef);
    background-color: #fff;
    position: relative;
    z-index: 1;
    padding: 0 2px;
  }
`;
