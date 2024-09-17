import React from 'react';
import * as S from './GraphBox.style';

const GraphBox = ({ title, children }) => {
  return (
    <S.ChartWrapper>
      <S.ChartTitle>{title}</S.ChartTitle>
      <S.Chart>{children}</S.Chart>
    </S.ChartWrapper>
  );
};

export default GraphBox;
