import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  attendanceListFile,
  eventDetail,
  eventImage,
  eventTitle,
  eventType,
  RegisterStep,
} from '../../../recoil/atoms/state';
import styled from 'styled-components';
import * as S from '../RegisterStyle';
import BackButton from './BackButton';
import UploadBox from './DragnDrop';

const RegisterSecond = () => {
  const Step = useSetRecoilState(RegisterStep);
  const type = useRecoilValue(eventType);
  const [iseventTitle, setEventTitle] = useRecoilState(eventTitle);
  const [iseventDetail, setEventDetail] = useRecoilState(eventDetail);
  const [poster, setPoster] = useRecoilState(eventImage);
  const [file, setFile] = useRecoilState(attendanceListFile);

  const handleExcelChange = (event) => {
    const excel = event.target.files[0];
    setFile(excel);
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setPoster(image);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        type === 'INTERNAL'
          ? 'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/%EC%B2%B4%ED%81%AC%EB%A9%94%EC%9D%B4%ED%8A%B8+%EC%B0%B8%EC%84%9D+%EB%AA%85%EB%8B%A8+%ED%8F%AC%EB%A7%B7.xlsx'
          : '교외 행사 파일 주소로 대체',
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
                onChangeFile={handleImageChange}
                accept=".png, .jpeg, .pdf"
                value={poster}
              />
              <S.FlexWrapper style={{ justifyContent: 'left' }}>
                <CategoryFont>행사 출석 파일</CategoryFont>
                <S.TemplateButton onClick={handleDownload}>
                  출석 파일 템플릿 다운
                </S.TemplateButton>
              </S.FlexWrapper>
              <UploadBox
                onChangeFile={handleExcelChange}
                accept=".xlsx, .xls"
                value={file}
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
