import * as S from './Dropdown.style';
import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('전체');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <S.Dropdown>
      <S.DropdownButton onClick={toggleDropdown}>
        {selectedItem}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownContent>
          <S.DropdownItem onClick={() => handleItemClick('전체')}>
            전체
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleItemClick('진행중')}>
            진행중
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleItemClick('마감')}>
            마감
          </S.DropdownItem>
        </S.DropdownContent>
      )}
    </S.Dropdown>
  );
};

export default Dropdown;
