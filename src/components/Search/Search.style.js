import { FaMagnifyingGlass } from 'react-icons/fa6';
import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: #f2f3f5;
  padding: 0 14px;
  width: 420px;
  height: 40px;
`;

export const SearchBox = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #000;
  background-color: transparent;

  &::placeholder {
    color: #aaaeb3;
  }
`;

export const StyledIcon = styled(FaMagnifyingGlass)`
  color: #2f7cef;
`;
