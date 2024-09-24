import React, { useState } from 'react';
import * as S from './UploadBox.style';
import FileButton from '@/pages/RegisterPage/RegisterComponents/Button/FileButton';

const FileInfo = ({ uploadedInfo }) => {
  const [preview, setPreview] = useState(false);

  const handlePreviewClick = (e) => {
    e.stopPropagation();
    setPreview(!preview);
  };

  const isImage = uploadedInfo.type.startsWith('image/');

  return (
    <S.PreviewWrapper>
      {isImage ? (
        <S.PreviewBox
          style={{
            backgroundImage: `url(${uploadedInfo.previewURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <S.PreviewLabel onClick={handlePreviewClick}>미리보기</S.PreviewLabel>
        </S.PreviewBox>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <S.PreviewMsg>엑셀 파일은 미리보기가 제공되지 않습니다.</S.PreviewMsg>
          <FileButton content={uploadedInfo.name} type={'white'} />
        </div>
      )}
    </S.PreviewWrapper>
  );
};

const UploadBox = ({ accept, onFileUpload }) => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setFileInfo = (file) => {
    const name = file.name;
    const previewURL = URL.createObjectURL(file);
    const type = file.type;

    setUploadedInfo({ name, previewURL, type });

    if (onFileUpload) {
      onFileUpload(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    if (!file) return;
    setFileInfo(file);
  };

  const handleUpload = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    setFileInfo(file);
  };

  return (
    <S.StyledLabel
      className={`preview${isActive ? ' active' : ''}`}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <S.HiddenInput
        type="file"
        className="file"
        onChange={handleUpload}
        accept={accept}
      />
      {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
      {!uploadedInfo && (
        <>
          <S.StyledIcon className={`preview${isActive ? ' active' : ''}`} />
          <S.PreviewMsg>클릭 혹은 파일을 이곳에 드롭하세요.</S.PreviewMsg>
        </>
      )}
    </S.StyledLabel>
  );
};

export default UploadBox;
