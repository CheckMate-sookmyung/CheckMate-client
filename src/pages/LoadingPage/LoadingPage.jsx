import { axiosInstance } from '@/axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  // 이미 가입한 유저일 시 : 메인 페이지로 이동
  const handleHome = () => {
    navigate('/');
    window.location.reload();
  };

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleLoginPost = async (code) => {
    const data = {
      code: code,
    };
    try {
      const res = await axiosInstance.post('/api/v2/signup', data);
      const accessToken = res.data.accessToken;
      localStorage.setItem('bagtoken', accessToken);
      handleHome();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log('로그인 재시도하세요.');
    }
  }, [code, navigate]);

  return (
    <div>
      <h1>로그인중입니다...</h1>
    </div>
  );
};

export default LoadingPage;
