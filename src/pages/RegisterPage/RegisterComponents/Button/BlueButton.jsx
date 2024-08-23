import styled from 'styled-components';

import React from 'react';

export default function BlueButton({ contents }) {
  return (
    <>
      <Container>
        <Wrapper>
          <Frame>{contents}</Frame>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Frame = styled.div`
  position: relative;
  border-radius: 30px;
  background-color: #edf5ff;
  border: 1px solid #aecfff;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 12px 26px;
  text-align: left;
  font-size: 20px;
  color: #2f7cef;
  font-family: Pretendard;
`;
