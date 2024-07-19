// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FileInfo = ({ uploadedInfo }) => (
//   <PreviewInfo>
//     {Object.entries(uploadedInfo).map(([key, value]) => (
//       <li key={key}>
//         <InfoKey>{key}</InfoKey>
//         <InfoValue>{value}</InfoValue>
//       </li>
//     ))}
//   </PreviewInfo>
// );

// const DragnDrop = ({ description }) => {
//   const [isActive, setActive] = useState(false);
//   const [uploadedInfo, setUploadedInfo] = useState(null);

//   const handleDragStart = () => setActive(true);
//   const handleDragEnd = () => setActive(false);
//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const setFileInfo = (file) => {
//     const { name, size: byteSize, type } = file;
//     const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
//     setUploadedInfo({ name, size, type });
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setActive(false);

//     const file = event.dataTransfer.files[0];
//     setFileInfo(file);
//   };

//   const handleUpload = ({ target }) => {
//     const file = target.files[0];
//     setFileInfo(file);
//   };

//   return (
//     <StyledLabel
//       className={`preview${isActive ? ' active' : ''}`}
//       onDragEnter={handleDragStart}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragEnd}
//       onDrop={handleDrop}
//     >
//       <HiddenInput type="file" className="file" onChange={handleUpload} />
//       {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
//       {!uploadedInfo && (
//         <>
//           <PreviewMsg>{description}</PreviewMsg>
//         </>
//       )}
//     </StyledLabel>
//   );
// };

// export default DragnDrop;

import React, { useState } from 'react';
import styled from 'styled-components';

// FileInfo 컴포넌트
const FileInfo = ({ uploadedInfo }) => (
  <PreviewInfo>
    {Object.entries(uploadedInfo).map(([key, value]) => (
      <li key={key}>
        <InfoKey>{key}</InfoKey>
        <InfoKey>{value}</InfoKey>
      </li>
    ))}
  </PreviewInfo>
);

// Logo 컴포넌트
const Logo = () => (
  <svg className="icon" x="0px" y="0px" viewBox="0 0 24 24">
    <path fill="transparent" d="M0,0h24v24H0V0z" />
    <path
      fill="#000"
      d="M20.5,5.2l-1.4-1.7C18.9,3.2,18.5,3,18,3H6C5.5,3,5.1,3.2,4.8,3.5L3.5,5.2C3.2,5.6,3,6,3,6.5V19  c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6,20.8,5.6,20.5,5.2z M12,17.5L6.5,12H10v-2h4v2h3.5L12,17.5z M5.1,5l0.8-1h12l0.9,1  H5.1z"
    />
  </svg>
);

// UploadBox 컴포넌트
const UploadBox = ({ accept }) => {
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
    setUploadedInfo({ name, size });
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
      <HiddenInput
        type="file"
        className="file"
        onChange={handleUpload}
        accept={accept}
      />
      {uploadedInfo && <FileInfo uploadedInfo={uploadedInfo} />}
      {!uploadedInfo && (
        <>
          <ImgBox>
            <Logo />
          </ImgBox>
          <PreviewMsg>클릭 혹은 파일을 이곳에 드롭하세요.</PreviewMsg>
        </>
      )}
    </StyledLabel>
  );
};

export default UploadBox;

const StyledLabel = styled.label`
  width: 100%;
  height: 150px;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
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

const ImgBox = styled.div`
  width: 50px;
  height: 50px;
  font-size: 15px;
  margin: 10px 0;
`;
