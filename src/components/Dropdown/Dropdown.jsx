import * as S from './Dropdown.style';
import { useState } from 'react';

const Dropdown = ({ items, defaultItem, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem || items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <S.Dropdown>
      <S.DropdownButton onClick={toggleDropdown}>
        {selectedItem}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownContent>
          {items.map((item, index) => (
            <S.DropdownItem key={index} onClick={() => handleItemClick(item)}>
              {item}
            </S.DropdownItem>
          ))}
        </S.DropdownContent>
      )}
    </S.Dropdown>
  );
};

export default Dropdown;
