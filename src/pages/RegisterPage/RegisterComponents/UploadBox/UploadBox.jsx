import React, { useState } from 'react';
import * as S from './UploadBox.style';
import FileButton from '../Button/FileButton';

//미리보기 선택 시 전체 프리뷰 기능 미구현

// FileInfo 컴포넌트
const FileInfo = ({ uploadedInfo }) => {
  const [preview, setPreview] = useState(false);

  const handlePreviewClick = (e) => {
    e.stopPropagation();
    setPreview(!preview);
  };

  return (
    <>
      <S.PreviewWrapper>
        <S.PreviewBox
          style={{
            backgroundImage: `url(${uploadedInfo.previewURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <S.PreviewLabel onClick={handlePreviewClick}>미리보기</S.PreviewLabel>
        </S.PreviewBox>
        <FileButton content={uploadedInfo.name} type={'white'} />
      </S.PreviewWrapper>
    </>
  );
};

// UploadBox 컴포넌트
const UploadBox = ({ accept, onFileUpload }) => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setFileInfo = (file) => {
    const { name, size: byteSize } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    const previewURL = URL.createObjectURL(file);
    setUploadedInfo({ name, size, previewURL });
    if (onFileUpload) {
      onFileUpload(file);
    }
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
