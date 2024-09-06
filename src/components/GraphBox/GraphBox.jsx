import React, { useState } from 'react';
import * as S from './GraphBox.style';

const GraphBox = ({ category, children }) => {
  return (
    <>
      <S.Wrapper>
        <S.Label>{category}</S.Label>
        <S.Box>{children}</S.Box>
      </S.Wrapper>
    </>
  );
};

export default GraphBox;
