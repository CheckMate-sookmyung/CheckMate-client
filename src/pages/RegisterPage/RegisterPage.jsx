import React from 'react';
import { useRecoilValue } from 'recoil';
import { RegisterStep } from '../../recoil/atoms/state';
import RegisterFirst from './PageComponents/RegisterFirst';
import RegisterSecond from './PageComponents/RegisterSecond';
import RegisterSideBar from './RegisterComponents/RegisterSideBar';

const RegisterPage = () => {
  const Step = useRecoilValue(RegisterStep);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <RegisterSideBar />
        {Step === 1 && <RegisterFirst />}
        {Step === 2 && <RegisterSecond />}
      </div>
    </>
  );
};

export default RegisterPage;
