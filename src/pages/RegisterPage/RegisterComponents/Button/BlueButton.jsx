import styled from 'styled-components';

export default function BlueButton({ contents }) {
  return (
    <Container>
      <Frame>{contents}</Frame>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Frame = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #edf5ff;
  border: 1px solid #aecfff;
  box-sizing: border-box;
  padding: 8px 18px;
  width: 100%;
  color: #2f7cef;
  font-size: 14px;
  font-weight: 500;
`;
