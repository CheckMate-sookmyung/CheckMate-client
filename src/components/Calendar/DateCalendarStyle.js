import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const PrimaryInput = styled.input`
  width: 250px;
  height: 56px;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 600px;
  height: auto;
  transform: translate(0, 55%);
  background-color: white;
  border-radius: 8px;
  z-index: 100;
  box-shadow: 0px 0px 20px #e0e0e0;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.p`
  margin: 0;
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 15px;
`;

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const MonthYear = styled.div`
  font-size: 1.25rem;
`;

export const DaysRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const Day = styled.div`
  width: 40px;
  text-align: center;
  font-weight: bold;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Cell = styled.div`
  width: calc(100% / 7);
  text-align: center;
  height: 70px;
  cursor: pointer;
  background: ${(props) => (props.selected ? '#0a2c83' : 'transparent')};
  color: ${(props) =>
    props.disabled ? '#ccc' : props.selected ? 'white' : 'black'};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => (props.disabled ? 'transparent' : '#0a2c83')};
    border-radius: 30px;
    color: white;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

export const SaveButton = styled.button`
  display: flex;
  width: 570px;
  height: 48px;
  color: white;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  cursor: pointer;
  border-radius: 4px;
`;
