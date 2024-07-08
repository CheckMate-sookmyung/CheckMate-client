import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PrimaryInput = styled.input`
  width: 200px;
  height: 56px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  right: 10px;
`;

export const ModalContent = styled.div`
  position: fixed;
  background: white;
  border-radius: 8px;
  width: 200px;
  height: 300px;
  margin-left: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow: scroll;
  box-shadow: 0px 0px 20px #e0e0e0;
`;

export const ModalHeader = styled.div`
  display: flex;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to right, #0a2c83, #1f5fa9);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalTitle = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 15px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  position: absolute;
  right: 10px;
`;

export const TimePickerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeLabel = styled.div`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;

export const TimeOption = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#0a2c83' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border-radius: 4px;
  margin-bottom: 5px;
  width: 50px;
  text-align: center;
  overflow: scroll;
  &:hover {
    background-color: ${(props) => (props.selected ? '#0a2c83' : '#f0f0f0')};
  }
`;

export const ButtonWrapper = styled.div`
  padding: 10px;
`;

export const ConfirmButton = styled.button`
  background-color: #0a2c83;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
`;
