import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './LoadingPage.style';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  useEffect(() => {
    const handleLoginPost = async (code) => {
      try {
        let id, socialId, name, email, refreshToken, accessToken;

        const tokenResponse = await axios.get(
          `${REACT_APP_SERVER_URL}/api/v1/code?code=${code}`,
        );

        if (tokenResponse.status !== 200) {
          throw new Error('액세스 토큰 가져오기 실패');
        }

        const initialAccessToken = tokenResponse.data.access_token;

        if (!initialAccessToken) {
          throw new Error('액세스 토큰이 응답에 없습니다.');
        }

        const userResponse = await axios.get(
          `${REACT_APP_SERVER_URL}/api/v1/login?accessToken=${initialAccessToken}`,
        );

        if (userResponse.status !== 200) {
          throw new Error('로그인 실패');
        }

        const userData = userResponse.data;

        id = userData.id;
        socialId = userData.socialId;
        name = userData.name;
        email = userData.email;
        refreshToken = userData.refreshToken;
        accessToken = userData.accessToken;
        const isNewMember = userData.isNewMember;

        if (isNewMember) {
          const signupResponse = await axios.post(
            `${REACT_APP_SERVER_URL}/api/v1/signup`,
            {
              name,
              email,
              socialId,
            },
          );

          if (signupResponse.status !== 200) {
            throw new Error('회원가입 실패');
          }

          const signupData = signupResponse.data;

          if (!signupData || !signupData.id || !signupData.accessToken) {
            throw new Error('회원가입 응답 데이터가 유효하지 않습니다.');
          }

          id = signupData.id;
          accessToken = signupData.accessToken;
        }

        sessionStorage.setItem('id', id);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('socialId', socialId);
        sessionStorage.setItem('refreshToken', refreshToken || '');
        sessionStorage.setItem('accessToken', accessToken);

        navigate('/');
        window.location.reload();
      } catch (error) {
        console.error('로그인 중 에러 발생:', error);

        if (error.response) {
          console.error(error.response.data);
        } else if (error.request) {
          console.error(
            '요청이 만들어졌지만 응답을 받지 못했습니다:',
            error.request,
          );
        } else {
          console.error('에러 메시지:', error.message);
        }

        navigate('/');
      }
    };

    if (code) {
      handleLoginPost(code);
    } else {
      alert('authorization code를 찾을 수 없습니다.');
      navigate('/');
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
