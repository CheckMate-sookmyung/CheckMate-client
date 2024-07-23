import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  attendanceListFile,
  eventDetail,
  eventImage,
  eventTargetState,
  eventTitle,
  eventTypeState,
  RegisterStep,
} from '../../../recoil/atoms/state';
import styled from 'styled-components';
import * as S from '../RegisterStyle';
import BackButton from './BackButton';
import UploadBox from './DragnDrop';

const RegisterSecond = () => {
  const Step = useSetRecoilState(RegisterStep);
  const type = useRecoilValue(eventTargetState);
  const [iseventTitle, setEventTitle] = useRecoilState(eventTitle);
  const [iseventDetail, setEventDetail] = useRecoilState(eventDetail);
  const [poster, setPoster] = useRecoilState(eventImage);
  const [file, setFile] = useRecoilState(attendanceListFile);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setPoster(image);
  };

  const handleExcelChange = (event) => {
    const excel = event.target.files[0];
    setFile(excel);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        type === 'INTERNAL'
          ? 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/template+(student).xlsx'
          : 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/template+(%EC%99%B8%EB%B6%80%EC%9A%A9)+.xlsx',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.setAttribute('href', url);
      link.setAttribute('download', 'template.xlsx');

      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const stepUp = () => {
    Step(3);
  };

  return (
    <>
      <S.Container>
        <S.ButtonWrapper>
          <BackButton />
        </S.ButtonWrapper>
        <S.SubContainer>
          <S.ContentBox style={{ alignItems: 'left' }}>
            <div style={{ width: '70%' }}>
              <CategoryFont>행사 제목</CategoryFont>
              <S.PrimaryInput
                placeholder="행사 제목"
                value={iseventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              ></S.PrimaryInput>
              <CategoryFont>행사 설명</CategoryFont>
              <S.ContentInput
                placeholder="행사 상세 설명"
                value={iseventDetail}
                onChange={(e) => setEventDetail(e.target.value)}
              ></S.ContentInput>
              <CategoryFont>행사 포스터</CategoryFont>
              <UploadBox
                onFileUpload={handleImageChange}
                onChange={handleImageChange}
                accept=".png, .jpeg, .pdf"
              />
              <S.FlexWrapper style={{ justifyContent: 'left' }}>
                <CategoryFont>행사 출석 파일</CategoryFont>
                <S.TemplateButton onClick={handleDownload}>
                  출석 파일 템플릿 다운
                </S.TemplateButton>
              </S.FlexWrapper>
              <UploadBox
                onFileUpload={handleExcelChange}
                onChange={handleExcelChange}
                accept=".xlsx, .xls"
              />
            </div>
            <S.MainButton onClick={stepUp}>다음</S.MainButton>
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterSecond;

const CategoryFont = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;
