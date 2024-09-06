import styled from 'styled-components';

export const EventTarget = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 7px;
  border-radius: 8px;
  width: 450px;
  gap: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const EventTargetRadioButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  margin: 0;
  border: 1px solid #2253ff;
  border-radius: 50px;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:checked::before {
    width: 10px;
    height: 10px;
    background: #4e75ff;
    border-radius: 50%;
    content: '';
    display: block;
  }
`;

export const EventTargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const EventTargetTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: #2c2d2e;
`;

export const EventTargetDescription = styled.span`
  width: auto;
  font-size: 14px;
  color: #76787a;
`;

export const Highlight = styled.span`
  color: #4e75ff;
  font-weight: bold;
`;
