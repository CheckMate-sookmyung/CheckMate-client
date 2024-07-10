import React from 'react';
import { useRecoilValue } from 'recoil';
import { RegisterStep } from '../../recoil/atoms/state';
import RegisterFirst from './RegisterComponents/RegisterFirst';
import RegisterSecond from './RegisterComponents/RegisterSecond';
import RegisterThird from './RegisterComponents/RegisterThird';

const RegisterPage = () => {
  const Step = useRecoilValue(RegisterStep);
  return (
    <>
      {Step === 1 && <RegisterFirst />}
      {Step === 2 && <RegisterSecond />}
      {Step === 3 && <RegisterThird />}
    </>
  );
};

export default RegisterPage;
