import * as S from './Input.style';

const Input = ({ placeholder, value, onChange, props }) => {
  return (
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
