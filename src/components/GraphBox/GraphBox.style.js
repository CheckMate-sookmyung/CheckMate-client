import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Label = styled.div`
  position: relative;
  font-size: 28px;
  font-weight: 600;
  color: #0d0d0d;
  text-align: left;
`;

export const Box = styled.div`
  max-width: 100%;
  position: relative;
  border-radius: 20px;
  border: 1px solid #aecfff;
  box-sizing: border-box;
  overflow: auto;
  padding: 20px;
  margin: 28px 0;
  height: 332px;

  * {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
