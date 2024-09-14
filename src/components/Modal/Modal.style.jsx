import styled from 'styled-components';
import { BREAKPOINTS } from '@/styles';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 66px 40px;
  width: 800px;
  height: auto;
  border-radius: 12px;
  background-color: #ffffff;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    width: 500px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    width: 300px;
    padding: 30px 16px 20px;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  font-size: 32px;
  font-weight: 600;
  color: var(--blue-0, #2f7cef);
  line-height: 1.2;
  word-break: keep-all;
  text-align: center;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 26px;
    margin-bottom: 26px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    gap: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 38px;
  border-radius: 10px;
  border: 1px solid var(--blue-4, #accdff);
  background: #f4f8ff;
  font-size: 16px;
  gap: 26px;

  @media (max-width: ${BREAKPOINTS[1]}px) {
    padding: 10px 18px;
  }
  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 10px 18px;
    gap: 10px;
  }
`;

export const ContentTitle = styled.span`
  color: var(--Black-2, #323232);
  font-size: 24px;
  font-weight: 500;
  padding: 0 10px;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    font-size: 20px;
  }
`;

export const ContentDescription = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 30px;
  border: 1px solid #aecfff;
  padding: 12px 26px;
  background: var(--White, #fff);
  gap: 8px;
  color: var(--blue-0, #2f7cef);
  font-size: 20px;
  font-weight: 500;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;
