import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 66px;
  width: 800px;
  height: auto;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  font-size: 32px;
  font-weight: 600;
  color: var(--blue-0, #2f7cef);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
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
`;

export const ContentTitle = styled.span`
  color: var(--Black-2, #323232);
  font-size: 24px;
  font-weight: 500;
  padding: 0 10px;
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
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const CancelButton = styled.button`
  margin-top: 36px;
  border-radius: 10px;
  padding: 20px 28px;
  background: var(--LG-3, #f2f2f2);
  font-size: 20px;
  font-weight: 600;
  color: var(--DG-2, #818181);
`;

export const CompletedButton = styled.button`
  width: 300px;
  height: 62px;
  border-radius: 4px;
  background: #0075ff;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`;
