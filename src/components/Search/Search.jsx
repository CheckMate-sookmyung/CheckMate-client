import { useState } from 'react';
import * as S from './Search.style';

const Search = ({ onSearch, placeholder = '검색어를 입력하세요.', props }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <S.SearchBoxWrapper>
      <S.StyledIcon />
      <S.SearchBox
        value={search}
        onChange={onChangeSearch}
        placeholder={placeholder}
        {...props}
      />
    </S.SearchBoxWrapper>
  );
};

export default Search;
