import * as S from './TabMenu.style';

const TabMenu = ({ label, onClick, active, ...props }) => {
  return (
    <S.TabMenu onClick={onClick} active={active} {...props}>
      {label}
    </S.TabMenu>
  );
};

export default TabMenu;
