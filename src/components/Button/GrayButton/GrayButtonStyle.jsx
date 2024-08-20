import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  padding: 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: var(--LG-3, #f2f2f2);

  color: ${(props) => {
    switch (props.fontColor) {
      case 'grey':
        return 'var(--DG-2, #818181)';
      case 'red':
        return '#F92828';
      default:
        return 'var(--Black-2, #323232)';
    }
  }};
  font-size: 16px;
  font-weight: 600;
`;
