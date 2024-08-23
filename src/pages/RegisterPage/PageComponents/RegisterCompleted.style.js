import styled from 'styled-components';
import { IoMdCheckmark } from 'react-icons/io';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100vh;
  align-items: center;
  gap: 40px;
  padding: 180px 0px;
`;

export const Check = styled(IoMdCheckmark)`
  width: 80px;
  height: 80px;
  display: flex;
  margin: 0 5px;
  color: #5bfb67;
`;

export const CompletedNotice = styled.p`
  font-size: 32px;
  line-height: 45px;
  font-weight: 600;
  color: #2f7cef;
  text-align: center;
  display: inline-block;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 20px;
  background-color: #fff;
  border: 2px solid #accdff;
  box-sizing: border-box;
  color: #accdff;
  font-size: 22px;
  line-height: 140%;
  padding: 20px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  gap: 30px;
`;
