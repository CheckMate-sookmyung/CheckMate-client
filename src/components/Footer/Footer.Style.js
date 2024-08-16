import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #f8f8f8;
  height: 256px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: #323232;
  font-family: Pretendard;
`;

export const Child = styled.div`
  position: absolute;
  top: calc(50% - 127.5px);
  left: calc(50% - 720px);
  width: 1440px;
  height: 256px;
`;

export const Category = styled.div`
  position: absolute;
  top: 64px;
  left: 352px;
  font-weight: 600;
`;

export const Copyright = styled.div`
  position: absolute;
  top: 155px;
  left: 352px;
  font-weight: 500;
`;

export const FirstDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Address = styled.div`
  position: absolute;
  top: 0px;
  left: 89px;
`;

export const Vector404Stroke = styled.img`
  position: absolute;
  top: 0px;
  left: 80.5px;
  width: 1px;
  height: 14px;
`;

export const Parent = styled.div`
  position: absolute;
  top: 133px;
  left: 352px;
  width: 357px;
  height: 14px;
  font-size: 12px;
`;

export const NameBox = styled.div`
  position: relative;
`;

export const Vector401Stroke = styled.img`
  width: 1px;
  position: relative;
  height: 14px;
`;

export const Group = styled.div`
  position: absolute;
  top: 89px;
  left: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 12px;
`;

export const Vector403Stroke = styled.img`
  position: absolute;
  top: 1px;
  left: 86.5px;
  width: 1px;
  height: 14px;
`;

export const SecondBox = styled.div`
  position: absolute;
  top: 1px;
  left: 95px;
`;

export const Vector403StrokeParent = styled.div`
  position: absolute;
  top: 88px;
  left: 856px;
  width: 207px;
  height: 15px;
  font-size: 12px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 64.5px;
  left: 100px;
  width: 89px;
  height: 32px;
`;
