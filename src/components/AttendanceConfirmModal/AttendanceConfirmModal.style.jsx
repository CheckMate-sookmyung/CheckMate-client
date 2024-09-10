import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 50px;
  margin: 0 auto;
  width: 800px;
  height: auto;
  border-radius: 12px;
  background-color: #ffffff;
  gap: 30px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 500px;
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 300px;
    padding: 30px 20px;
    gap: 10px;
  }
`;

export const Character = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-left: -50px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    img {
      width: 80%;
    }
  }

  @media (max-width: ${BREAKPOINTS[0]}px) {
    margin-left: -20px;
    img {
      width: 60%;
    }
  }
`;

export const Content = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 40px;

  & > strong {
    color: #0075ff;
  }

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 500px;
    font-size: 32px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 300px;
    font-size: 28px;
  }
`;
