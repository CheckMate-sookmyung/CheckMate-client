import { axiosInstance } from '@/axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoadingPage.style';

const LoadingPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleLoginPost = async (code) => {
    try {
      const tokenResponse = await axiosInstance.get(
        `/api/v1/code?code=${code}`,
      );
      const accessToken = tokenResponse.data.access_token;
      localStorage.setItem('accessToken', accessToken);

      if (!accessToken) {
        alert('Access token not found');
      }

      const userResponse = await axiosInstance.get(
        `/api/v1/login?accessToken=${accessToken}`,
      );
      const { id, socialId, name, email, refreshToken, isNewMember } =
        userResponse.data;

      localStorage.setItem('id', id);
      localStorage.setItem('email', email);
      localStorage.setItem('name', name);
      localStorage.setItem('socialId', socialId);
      localStorage.setItem('refreshToken', refreshToken);

      if (isNewMember) {
        const memberInfoRequest = { email, name, socialId };
        const signupResponse = await axiosInstance.post(
          `/api/v1/signup`,
          memberInfoRequest,
        );
        const { id } = signupResponse.data;

        localStorage.setItem('id', id);
      }
      handleHome();
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error);
      handleHome();
    }
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      alert('authorization code를 찾을 수 없습니다.');
      handleHome();
    }
  }, [code, navigate]);

  return (
    <S.LoadingContainer>
      <S.Spinner />
      <S.LoadingText>로그인 중입니다...</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default LoadingPage;
