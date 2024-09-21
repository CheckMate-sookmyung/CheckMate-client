import React, { useEffect, useState } from 'react';
import * as S from './UploadBox.style';
import FileButton from '../../pages/RegisterPage/RegisterComponents/Button/FileButton';

//미리보기 선택 시 전체 프리뷰 기능 미구현

// FileInfo 컴포넌트
const FileInfo = ({ uploadedInfo }) => {
  const [preview, setPreview] = useState(false);

  const handlePreviewClick = (e) => {
    e.stopPropagation();
    setPreview(!preview);
  };

  return (
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
      {uploadedInfo.name !== null && (
        <FileButton content={uploadedInfo.name} type={'white'} />
      )}
    </S.PreviewWrapper>
  );
};

// UploadBox 컴포넌트
const UploadBox = ({ defaultImageUrl, accept, onFileUpload }) => {
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
    setUploadedInfo({ name, previewURL });
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

  useEffect(() => {
    setUploadedInfo({
      name: '',
      previewURL: defaultImageUrl,
    });
  }, [defaultImageUrl]);

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
