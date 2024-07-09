import React from 'react';
import RegisterFirst from './RegisterComponents/RegisterFirst';
import RegisterSecond from './RegisterComponents/RegisterSecond';
import RegisterThird from './RegisterComponents/RegisterThird';
import { useRecoilValue } from 'recoil';
import { RegisterStep } from '../../recoil/atoms/state';

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
