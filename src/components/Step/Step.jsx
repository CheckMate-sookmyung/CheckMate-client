import * as S from './Step.style';
import PropTypes from 'prop-types';
import { CheckIcon } from '../../icons';

const Step = ({ label, completed = false, active = false }) => {
  return (
    <S.Container>
      <S.Circle completed={completed} active={active}>
        {active && <CheckIcon />}
      </S.Circle>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

Step.propTypes = {
  label: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  active: PropTypes.bool,
};

export default Step;
