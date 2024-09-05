import { PiPaperclipHorizontalBold } from 'react-icons/pi';
import styled from 'styled-components';

const FileButton = ({ content, type, onClick }) => {
  return (
    <TemplateButton type={type} onClick={onClick}>
      <RotatedIcon />
      {content}
    </TemplateButton>
  );
};

export default FileButton;

const TemplateButton = styled.div`
  border-radius: 8px;
  width: auto;
  height: fit-content;
  display: flex;
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  gap: 6px;
  border: ${(props) => (props.type === 'blue' ? 'none' : '2px solid #accdff')};

  background-color: ${(props) =>
    props.type === 'blue' ? '#2f7cef' : '#ffffff'};
  color: ${(props) => (props.type === 'blue' ? '#ffffff' : '#2f7cef')};
`;

const RotatedIcon = styled(PiPaperclipHorizontalBold)`
  transform: scaleX(-1) rotate(-60deg);
`;
