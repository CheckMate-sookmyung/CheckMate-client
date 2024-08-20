import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => (props.size === 'large' ? '10px' : '8px')};
  padding: ${(props) => (props.size === 'large' ? '14px 18px' : '0 14px')};
  gap: 8px;
  background: var(--blue-0, #2f7cef);

  color: var(--White, #fff);
  font-size: ${(props) => (props.size === 'large' ? '16px' : '13px')};
  font-weight: ${(props) => (props.size === 'large' ? '600' : '500')};
`;
