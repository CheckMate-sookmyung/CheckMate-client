import * as S from './Textarea.style';

const Textarea = ({
  placeholder,
  value,
  onChange,
  height = '100px',
  ...props
}) => {
  return (
    <S.Textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ height }}
      {...props}
    />
  );
};

export default Textarea;
