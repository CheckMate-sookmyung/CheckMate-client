import React from 'react';
import * as S from './ButtonStyle';

const Button = ({
  label,
  onClick,
  size = 'large',
  backgroundColor = '#2f7cef',
  textColor = '#fff',
}) => {
  return (
    <S.Button
      onClick={onClick}
      size={size}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {label}
    </S.Button>
  );
};

export default Button;

// 별도로 medium으로 설정하지 않으면 기본 속성인 large 사이즈로 지정되며
// #2f7cef이 기본 버튼 스타일로 지정되어 있음
