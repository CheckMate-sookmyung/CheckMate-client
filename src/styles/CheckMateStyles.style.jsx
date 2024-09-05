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
    overflow-x: hidden;
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

    /* 최신 */
    --blue-0: #2f7cef;
    --blue-4: #accdff;
    --blue-5: #edf5ff;

    --green-0: #5bfb67;

    --DG-1: #6b6b6b;
    --DG-2: #818181;

    --LG-3: #f2f2f2;
    --LG-4: #f8f8f8;

    --White: #fff;
    --Black-2: #323232;
    --Black-0: #000;
  }
`;
