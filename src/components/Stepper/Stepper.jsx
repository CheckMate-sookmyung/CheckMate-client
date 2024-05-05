import { Step } from '../';
import * as S from './Stepper.style';
import PropTypes from 'prop-types';

const Stepper = ({ activeStep = 0, stepLabelList }) => {
  return (
    <S.Container>
      {stepLabelList.map((stepLabel, index) => (
        <S.StepItem key={stepLabel}>
          {index > 0 && <S.Line completed={activeStep >= index} />}
          <Step
            label={stepLabel}
            active={activeStep === index}
            completed={activeStep > index}
          />
        </S.StepItem>
      ))}
    </S.Container>
  );
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  stepLabelList: PropTypes.arrayOf(PropTypes.string),
};

export default Stepper;
