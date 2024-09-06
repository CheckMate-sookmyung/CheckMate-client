import * as S from './SlimButton.style';

const SlimButton = ({
  label,
  onClick,
  backgroundColor = '#fff',
  textColor = '#4e75ff',
  ...props
}) => {
  return (
    <S.SlimButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      {label}
    </S.SlimButton>
  );
};

export default SlimButton;
