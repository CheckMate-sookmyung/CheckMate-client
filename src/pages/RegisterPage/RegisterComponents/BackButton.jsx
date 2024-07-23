import React from 'react';
import styled from 'styled-components';
import { GoChevronLeft } from 'react-icons/go';
import { useSetRecoilState } from 'recoil';
import { RegisterStep } from '../../../recoil/atoms/state';

const BackButton = () => {
  const Step = useSetRecoilState(RegisterStep);

  const stepDown = () => {
    Step((prevStep) => prevStep - 1);
  };

  return (
    <>
      <BackWrapper>
        <ArrowBox onClick={stepDown}>
          <GoChevronLeft />
        </ArrowBox>
        <BasicFont>이전으로</BasicFont>
      </BackWrapper>
    </>
  );
};

export default BackButton;

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  gap: 10px;
`;

const ArrowBox = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
`;

const BasicFont = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
