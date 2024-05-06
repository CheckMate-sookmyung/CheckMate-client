import * as S from './Modal.style';
import { CheckBoxIcon } from '../../icons';

const Modal = () => {
  return (
    <S.ReviewLayout>
      <S.Title>조영서님이 맞으십니까?</S.Title>
      <S.ContentContainer>
        <S.Content>
          <S.ContentTitle>학과</S.ContentTitle>
          <S.ContentDescription>
            소프트웨어학부 컴퓨터과학전공
          </S.ContentDescription>
        </S.Content>
        <S.Content>
          <S.ContentTitle>학번</S.ContentTitle>
          <S.ContentDescription>2110423</S.ContentDescription>
        </S.Content>
        <S.Content>
          <S.ContentTitle>행사</S.ContentTitle>
          <S.ContentDescription>
            LINE 개발자가 알려주는 React 입문
          </S.ContentDescription>
        </S.Content>
      </S.ContentContainer>
      <S.CheckContainer>
        <CheckBoxIcon />
        <S.CheckContent>네, 본인이 맞습니다.</S.CheckContent>
      </S.CheckContainer>
      <S.CompletedButton>서명하러 하기</S.CompletedButton>
    </S.ReviewLayout>
  );
};

export default Modal;
