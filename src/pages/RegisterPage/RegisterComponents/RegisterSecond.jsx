import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { RegisterStep } from '../../../recoil/atoms/state';
import styled from 'styled-components';
import * as S from '../RegisterStyle';
import DragnDrop from './DragnDrop';

const RegisterSecond = () => {
  const Step = useSetRecoilState(RegisterStep);
  const navigate = useNavigate();
  const [eventTitle, setEventTitle] = useState('');
  const [eventDetail, setEventDetail] = useState('');
  const [eventImage, setEventImage] = useState(null);
  const [attendanceListFile, setAttendanceListFile] = useState(null);
  const [poster, setPoster] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileSelect = (file) => {
    setFile(file);
  };

  const handlePosterSelect = (event) => {
    const poster = event.target.files[0];
    setPoster(poster);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://checkmate-service-bucket.s3.ap-northeast-2.amazonaws.com/%EC%B2%B4%ED%81%AC%EB%A9%94%EC%9D%B4%ED%8A%B8+%EC%B0%B8%EC%84%9D+%EB%AA%85%EB%8B%A8+%ED%8F%AC%EB%A7%B7.xlsx',
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

  const stepDown = () => {
    Step(1);
  };

  const stepUp = () => {
    Step(3);
  };

  return (
    <>
      {/* <BackButton /> */}
      <S.Container>
        <S.SubContainer>
          <S.ContentBox style={{ alignItems: 'left' }}>
            <div style={{ width: '60%' }}>
              <CategoryFont>행사 제목</CategoryFont>
              <S.PrimaryInput
                placeholder="행사 제목"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              ></S.PrimaryInput>
              <CategoryFont>행사 설명</CategoryFont>
              <S.ContentInput
                placeholder="행사 상세 설명"
                value={eventDetail}
                onChange={(e) => setEventDetail(e.target.value)}
              ></S.ContentInput>
              <CategoryFont>행사 포스터</CategoryFont>
              <DragnDrop
                onChangeFile={handlePosterSelect}
                accept=".png, .jpeg, .pdf"
                description="등록하실 포스터를 선택하거나 드래그해주세요."
              />
              <S.FlexWrapper style={{ justifyContent: 'left' }}>
                <CategoryFont>행사 출석 파일</CategoryFont>
                <S.MainButton
                  style={{ margin: '0', padding: '0 5px', width: 'auto' }}
                  onClick={handleDownload}
                >
                  출석 파일 템플릿 다운
                </S.MainButton>
              </S.FlexWrapper>
              <DragnDrop
                onChangeFile={handleFileSelect}
                accept=".xlsx, .xls"
                description="등록하실 출석 명단을 선택하거나 드래그해주세요."
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
