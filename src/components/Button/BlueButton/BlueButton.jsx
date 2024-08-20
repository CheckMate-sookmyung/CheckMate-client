import React from 'react';
import * as S from './BlueButtonStyle';

const BlueButton = ({ label, onClick, size = 'large' }) => {
  return (
    <S.Button onClick={onClick} size={size}>
      {label}
    </S.Button>
  );
};

export default BlueButton;
