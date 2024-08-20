import styled from 'styled-components';
import * as S from './Stepper.style';
import { IoMdCheckmark } from 'react-icons/io';

//기능 미구현

const Stepper = () => {
  return (
    <>
      <S.StepperWrapper>
        <S.Step>1</S.Step>
        <S.Linked />
        <S.Step>2</S.Step>
        <S.Linked />
        <S.Step>3</S.Step>
      </S.StepperWrapper>
    </>
  );
};

//{isCompleted ? <IoMdCheckmark style={{color:'#2F7CEF' }} /> : 3}

export default Stepper;
