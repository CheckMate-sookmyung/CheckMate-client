import * as S from './Button.style';

const Button = ({
  label,
  onClick,
  backgroundColor = '#2f7cef',
  textColor = '#fff',
  ...props
}) => {
  return (
    <S.Button
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      {label}
    </S.Button>
  );
};

export default Button;
