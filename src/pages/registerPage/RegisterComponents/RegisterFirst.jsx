import React, { useState } from 'react';
import * as S from '../RegisterStyle';
import { RegisterStep } from '../../../recoil/atoms/state';
import { useSetRecoilState } from 'recoil';

const RegisterFirst = () => {
  const Step = useSetRecoilState(RegisterStep);
  const [isOnline, setIsOnline] = useState('OFFLINE');
  const [eventType, setEventType] = useState('INTERNAL');

  const handleOnline = () => {
    setIsOnline('ONLINE');
  };

  const handleOffline = () => {
    setIsOnline('OFFLINE');
  };

  const getEventType = (event) => {
    setEventType(event.target.value);
  };

  const stepUp = () => {
    Step(2);
  };

  return (
    <>
      <S.Container>
        <S.SubContainer>
          <S.ContentBox>
            <S.MainFont>행사는 온라인인가요, 오프라인인가요?</S.MainFont>
            <S.SubFont>
              다른 라이브 스트리밍 플랫폼을 활용하여 행사를 진행합니다.
            </S.SubFont>
            <S.FlexWrapper>
              <S.Choicebox
                onClick={handleOnline}
                isSelected={isOnline === 'ONLINE'}
              >
                <S.CustomImage src="img/ONLINE.png" alt="" />
                <S.MainFont>온라인 행사</S.MainFont>
              </S.Choicebox>
              <S.Choicebox
                onClick={handleOffline}
                isSelected={isOnline === 'OFFLINE'}
              >
                <S.CustomImage src="img/OFFLINE.png" alt="" />

                <S.MainFont>오프라인 행사</S.MainFont>
              </S.Choicebox>
            </S.FlexWrapper>
            <S.ContentBox style={{ textAlign: 'left' }}>
              <div>
                <S.MainFont>행사 유형</S.MainFont>
                <S.FlexWrapper style={{ justifyContent: 'start' }}>
                  <S.EventRadio
                    name="eventType"
                    value="INTERNAL"
                    onClick={getEventType}
                    defaultChecked
                  />
                  <div>
                    <S.MainFont style={{ fontSize: '24px' }}>
                      교내 행사
                    </S.MainFont>
                    <S.SubFont>
                      숙명여대 학생들만이 참가하는 행사로, <b>학번</b>을 통해
                      출석을 확인해요.
                    </S.SubFont>
                  </div>
                </S.FlexWrapper>
                <S.FlexWrapper style={{ justifyContent: 'start' }}>
                  <S.EventRadio
                    name="eventType"
                    value="EXTERNAL"
                    onClick={getEventType}
                  />
                  <div>
                    <S.MainFont style={{ fontSize: '24px' }}>
                      교외 행사
                    </S.MainFont>
                    <S.SubFont>
                      외부인들이 참가하는 행사로, <b>전화번호</b>를 통해 출석을
                      확인해요.
                    </S.SubFont>
                  </div>
                </S.FlexWrapper>
              </div>
            </S.ContentBox>
            <S.MainButton onClick={stepUp}>다음</S.MainButton>
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterFirst;
