import React, { useState } from 'react';
import styled from 'styled-components';

const FileInfo = ({ uploadedInfo }) => (
  <PreviewInfo>
    {Object.entries(uploadedInfo).map(([key, value]) => (
      <li key={key}>
        <InfoKey>{key}</InfoKey>
        <InfoValue>{value}</InfoValue>
      </li>
    ))}
  </PreviewInfo>
);

const DragnDrop = ({ description }) => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setFileInfo = (file) => {
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedInfo({ name, size, type });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };

  const handleUpload = ({ target }) => {
    const file = target.files[0];
    setFileInfo(file);
  };

  return (
    <StyledLabel
      className={`preview${isActive ? ' active' : ''}`}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <HiddenInput type="file" className="file" onChange={handleUpload} />
      {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
      {!uploadedInfo && (
        <>
          <PreviewMsg>{description}</PreviewMsg>
        </>
      )}
    </StyledLabel>
  );
};

export default DragnDrop;

const StyledLabel = styled.label`
  width: 100%;
  height: 150px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed #eee;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.active {
    background-color: #efeef3;
    border-color: #111;
  }

  &:hover {
    border-color: #111;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewMsg = styled.p`
  font-weight: 500;
  font-size: 18px;
  padding: 20px;
`;

const PreviewInfo = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

const InfoKey = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 4px;
`;

const InfoValue = styled.span`
  font-size: 14px;
`;
