import styled from 'styled-components';

export const StepperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Step = styled.div`
  //기본 원형
  position: relative;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 1.3px solid #accdff;
  background-color: #edf5ff;
  border-radius: 50%;
  color: #2f7cef;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CurrentStep = styled.div`
  //현재 스텝 남색 원형
  position: relative;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 1.3px solid #accdff;
  background-color: #2f7cef;
  border-radius: 50%;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Linked = styled.div`
  width: auto;
  height: 2px;
  width: 26px;
  background-color: #accdff;
`;

export const VectorParent = styled.div`
  width: 100%;
  position: relative;
  height: 48px;
  text-align: left;
  font-size: 20px;
  color: #2f7cef;
  font-family: Pretendard;
`;

export const GroupChild = styled.img`
  position: absolute;
  top: 24px;
  left: 18px;
  max-height: 100%;
  width: 154px;
`;

export const EllipseParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48px;
  height: 48px;
  color: #fff;
`;

export const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #2f7cef;
  border: 1.3px solid #accdff;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
`;

export const Div = styled.div`
  position: absolute;
  top: 12px;
  left: 19px;
  font-weight: 500;
`;

export const EllipseGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 74px;
  width: 48px;
  height: 48px;
`;

export const EllipseContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 148px;
  width: 48px;
  height: 48px;
`;

export const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: #edf5ff;
  border: 1.3px solid #accdff;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
`;

export const Div1 = styled.div`
  position: absolute;
  top: 12px;
  left: 18px;
  font-weight: 500;
`;
