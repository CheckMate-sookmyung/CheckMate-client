import PropTypes from 'prop-types';
import * as S from './AttendanceSignPage.style';
import { AttendanceHeader } from '../../components';

const SAMPLE_NAME = '조영서';

const AttendanceSignPage = () => {
  return (
    <S.Container>
      <AttendanceHeader
        event="LINE 개발자가 알려주는 React 입문"
        activeStep={1}
      />
      <S.Title>{`${SAMPLE_NAME}님의 서명을 입력하세요.`}</S.Title>
      <S.SignPad></S.SignPad>
      <S.CompletedButton>입력 완료</S.CompletedButton>
    </S.Container>
  );
};

AttendanceSignPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AttendanceSignPage;
