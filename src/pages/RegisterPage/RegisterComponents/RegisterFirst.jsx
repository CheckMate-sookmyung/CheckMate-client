import React from 'react';
import * as S from '../RegisterStyle';
import {
  eventType,
  offlineStatus,
  RegisterStep,
} from '../../../recoil/atoms/state';
import { useRecoilState, useSetRecoilState } from 'recoil';

const RegisterFirst = () => {
  const Step = useSetRecoilState(RegisterStep);
  const [isOnline, setIsOnline] = useRecoilState(offlineStatus);
  const [iseventType, setEventType] = useRecoilState(eventType);

  const handleOnlineStatus = (status) => {
    setIsOnline(status);
  };

  const handleEventType = (event) => {
    setEventType(event.target.value);
  };

  const stepUp = () => {
    Step(2);
  };

  return (
    <>
      <S.Container>
        <div style={{ height: '50px' }} />
        <S.SubContainer>
          <S.ContentBox>
            <S.MainFont>행사는 온라인인가요, 오프라인인가요?</S.MainFont>
            <S.SubFont>
              다른 라이브 스트리밍 플랫폼을 활용하여 행사를 진행합니다.
            </S.SubFont>
            <S.FlexWrapper>
              <S.Choicebox
                onClick={() => handleOnlineStatus('ONLINE')}
                isSelected={isOnline === 'ONLINE'}
              >
                <S.CustomImage src="img/ONLINE.png" alt="" />
                <S.MainFont>온라인 행사</S.MainFont>
              </S.Choicebox>
              <S.Choicebox
                onClick={() => handleOnlineStatus('OFFLINE')}
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
                    onClick={handleEventType}
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
                    onClick={handleEventType}
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
