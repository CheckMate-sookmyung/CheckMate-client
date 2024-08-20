import React from 'react';
import * as S from './Footer.Style';

const Footer = () => {
  return (
    <S.Container>
      <S.Child />
      <S.Category>개발</S.Category>
      <S.Copyright>Copyright ⓒ 소프트웨어학부 All Rights Reserved.</S.Copyright>
      <S.Category style={{ left: '856px' }}>디자인</S.Category>
      <S.Parent>
        <S.FirstDiv>숙명여자대학교</S.FirstDiv>
        <S.Address>
          04310 서울특별시 용산구 청파로47길 100 (청파동 2가)
        </S.Address>
        <S.Vector404Stroke alt="" src="img/Bar.svg" />
      </S.Parent>
      <S.Group>
        <S.NameBox>류미성 (컴퓨터과학 21)</S.NameBox>
        <S.Vector401Stroke alt="" src="img/Bar.svg" />
        <S.NameBox>조영서 (컴퓨터과학 21)</S.NameBox>
        <S.Vector401Stroke alt="" src="img/Bar.svg" />
        <S.NameBox>한정현 (컴퓨터과학 21)</S.NameBox>
      </S.Group>
      <S.Vector403StrokeParent>
        <S.Vector403Stroke alt="" src="img/Bar.svg" />
        <S.FirstDiv>김수진 (공예 21)</S.FirstDiv>
        <S.SecondBox>문서영 (산업디자인 22)</S.SecondBox>
      </S.Vector403StrokeParent>
      <S.Logo alt="Logo" src="img/CheckMateBlue.svg" />
    </S.Container>
  );
};

export default Footer;
