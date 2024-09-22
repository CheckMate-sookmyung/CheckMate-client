import * as S from './CompletionDropdown.style';
import React, { useCallback, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const CompletionDropdown = ({ defaultItem, items, onSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem || null);

  const onActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const onSelectItem = useCallback(
    (item) => {
      setSelectedItem(item);
      setIsActive(false);
      if (onSelect) {
        onSelect(item.value);
      }
    },
    [onSelect],
  );

  useEffect(() => {
    if (selectedItem) {
      const isValid = items.some((item) => item.value === selectedItem.value);
      if (!isValid) {
        const maxItem = items.reduce((prev, current) =>
          prev.value > current.value ? prev : current,
        );
        setSelectedItem(maxItem);
        if (onSelect) {
          onSelect(maxItem.value);
        }
      }
    }
  }, [items, selectedItem, onSelect]);

  return (
    <S.DropdownContainer>
      <S.DropdownBody onClick={onActiveToggle}>
        <S.DropdownContent>
          {selectedItem ? (
            <S.ItemName>{selectedItem.label}</S.ItemName>
          ) : (
            <S.DropdownSelect>행사 이수 기준을 선택해주세요.</S.DropdownSelect>
          )}
          <BiChevronDown />
        </S.DropdownContent>
      </S.DropdownBody>
      {isActive && (
        <S.DropdownMenu isActive={isActive}>
          {items.map((item, index) => (
            <S.DropdownItemContainer
              key={index}
              onClick={() => onSelectItem(item)}
            >
              <S.ItemName>{item.label}</S.ItemName>
            </S.DropdownItemContainer>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownContainer>
  );
};

export default CompletionDropdown;
