import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: #f2f3f5;
  border-radius: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 16px 10px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: #909499;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
  overflow: hidden;
  gap: 4px;
  cursor: pointer;
`;

export const TableData = styled.td`
  padding: 10px;
  font-size: 14px;
  color: #555;
  white-space: nowrap;

  &:first-child {
    text-align: left;
  }

  ${({ attendance }) =>
    attendance === '결석' &&
    css`
      color: #f32121;
    `}

  ${({ attendance }) =>
    attendance === '출석' &&
    css`
      color: #28a745;
    `}
`;

export const TelAnchor = styled.a`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  margin-left: auto;
  padding: 6px;
`;

export const AttendedCount = styled.p`
  color: #2f7cef;
  text-decoration: underline;
  cursor: pointer;
`;
