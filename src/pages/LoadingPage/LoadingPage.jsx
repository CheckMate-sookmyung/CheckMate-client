import { axiosInstance } from '@/axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoadingPage.style';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoadingPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleLoginPost = async (code) => {
    try {
      const tokenResponse = await axios.get(
        `${REACT_APP_SERVER_URL}/api/v1/code?code=${code}`,
      );
      const accessToken = tokenResponse.data.access_token;
      sessionStorage.setItem('accessToken', accessToken);

      if (!accessToken) {
        alert('Access token not found');
      }

      const userResponse = await axios.get(
        `${REACT_APP_SERVER_URL}/api/v1/login?accessToken=${accessToken}`,
      );
      const { id, socialId, name, email, refreshToken, isNewMember } =
        userResponse.data;

      sessionStorage.setItem('id', id);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('socialId', socialId);
      sessionStorage.setItem('refreshToken', refreshToken);

      if (isNewMember) {
        const signupResponse = await axios.post(
          `${REACT_APP_SERVER_URL}/api/v1/signup?name=${name}&email=${email}&socialId=${socialId}`,
        );
        const { id, accessToken } = signupResponse.data;
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('accessToken', accessToken);
      }

      handleHome();
    } catch (error) {
      console.error('Login failed:', error);
      // alert('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
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
