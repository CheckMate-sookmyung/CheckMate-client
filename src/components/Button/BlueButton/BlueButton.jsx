import React from 'react';
import * as S from './BlueButtonStyle';

const BlueButton = ({
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

export default BlueButton;
