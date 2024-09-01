import * as S from './TabMenu.style';

const TabMenu = ({ label, onClick, ...props }) => {
  return (
    <S.TabMenu onClick={onClick} {...props}>
      {label}
    </S.TabMenu>
  );
};

export default TabMenu;
