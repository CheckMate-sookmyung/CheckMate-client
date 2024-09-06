import React, { useState } from 'react';
import * as S from './Search.style';
import { SearchBoxWrapper } from '@/pages/DashboardPage/DashboardAttendeePage.style';

const Search = ({ onSearch }) => {
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
        placeholder="검색어를 입력하세요."
      />
    </S.SearchBoxWrapper>
  );
};

export default Search;
