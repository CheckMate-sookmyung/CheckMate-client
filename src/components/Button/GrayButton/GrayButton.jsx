import React from 'react';
import * as S from './GrayButtonStyle';

const GrayButton = ({ label, onClick, fontColor }) => {
  return (
    <S.Button onClick={onClick} fontColor={fontColor}>
      {label}
    </S.Button>
  );
};

export default GrayButton;
