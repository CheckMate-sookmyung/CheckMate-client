import PropTypes from 'prop-types';
import * as S from './SignPage.style';

const SignPage = ({ name }) => {
  return (
    <S.Container>
      <S.Header>{`${name}님의 서명을 입력하세요.`}</S.Header>
      <S.SignPad></S.SignPad>
      <S.CompletedButton>입력 완료</S.CompletedButton>
    </S.Container>
  );
};

SignPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SignPage;
