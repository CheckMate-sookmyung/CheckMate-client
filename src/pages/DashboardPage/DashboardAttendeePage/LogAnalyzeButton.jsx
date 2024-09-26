import React, { useState } from 'react';
import * as S from './DashboardAttendeePage.style';

import { axiosInstance } from '@/axios';
import { SlimButton } from '@/components';

const LogAnalyzeButton = ({ eventScheduleId }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleLogAnalyze = async () => {
    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('attendanceListFile', selectedFile);

    try {
      const response = await axiosInstance.put(
        `/api/v1/attendancelist/${eventScheduleId}`,
        formData,
      );

      if (response.status === 200) {
        const downloadUrl = response.data;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'analyzed_log.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('파일 업로드에 실패했습니다.');
      }
    } catch (error) {
      console.error('파일 업로드 중 오류 발생:', error);
      alert('파일 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };
  return (
    <>
      <S.FileUploadWrapper>
        <S.FileLabel htmlFor="file-upload">
          {selectedFile ? selectedFile.name : '파일 선택'}
        </S.FileLabel>
        <input
          id="file-upload"
          type="file"
          name="attachment"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <SlimButton onClick={handleLogAnalyze} label="분석" />
      </S.FileUploadWrapper>
    </>
  );
};

export default LogAnalyzeButton;
