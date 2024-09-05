import * as S from './Textarea.style';

const Textarea = ({ placeholder, value, onChange, props }) => {
  return (
    <S.Textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Textarea;
