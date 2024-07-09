import { css } from 'styled-components';

export const checkMateStyles = css`
  * {
    font-family: Pretendard;
  }

  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  button,
  a {
    cursor: pointer;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    -webkit-user-drag: none;
  }

  button,
  input,
  textarea,
  select,
  meter,
  progress {
    /* appearance: none; */
  }

  b {
    font-weight: 700;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overscroll-behavior-y: contain;

    .box {
      -ms-overflow-style: none;
    }
    .box::-webkit-scrollbar {
      display: none;
    }
  }

  :root {
    /* Primary color */
    --blue-100: #f4f9ff;
    --blue-200: #bddbff;
    --blue-300: #2c8dff;
    --blue-400: #0075ff;
    --blue-500: #2e69ff;

    /* Gray Color */
    --gray-100: #f0f0f0;
    --gray-200: #d9d9d9;
    --gray-300: #636363;
    --gray-400: #212121;

    /* Green Color */
    --green-100: #beffad;
    --green-200: #3f0;

    /* 추가된 색상 */
    --yellow-100: #fff9db;
    --yellow-200: #ffec99;
    --yellow-300: #ffdf4d;
    --yellow-400: #ffd700;
    --yellow-500: #ffcc00;

    --red-100: #ffe6e6;
    --red-200: #ff9999;
    --red-300: #ff4d4d;
    --red-400: #ff0000;
    --red-500: #cc0000;
  }
`;
