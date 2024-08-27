import React from 'react';
import * as S from './RegisterFirst.style';
import {
  eventTargetState,
  eventTypeState,
  RegisterStep,
} from '../../../recoil/atoms/state';
import { useRecoilState, useSetRecoilState } from 'recoil';
import BlueButton from '../RegisterComponents/Button/BlueButton';
import Stepper from '../RegisterComponents/Stepper/Stepper';
import EventTypeCard from '../RegisterComponents/EventTypeCard/EventTypeCard';

const RegisterFirst = () => {
  const Step = useSetRecoilState(RegisterStep);
  const [eventType, setEventType] = useRecoilState(eventTypeState);
  const [eventTarget, setEventTarget] = useRecoilState(eventTargetState);

  const handleEventType = (status) => {
    setEventType(status);
  };

  const handleEventTarget = (event) => {
    setEventTarget(event.target.value);
  };

  const stepUp = () => {
    Step(2);
  };

  return (
    <>
      <S.Container>
        <S.SubContainer>
          <S.ContentBox>
            <S.FlexWrapper>
              <BlueButton contents={'진행 방식'} />
            </S.FlexWrapper>
            <S.MainFont>
              행사는 온라인인가요,
              <br /> 오프라인인가요?
            </S.MainFont>
            <br />
            <S.SubFont>
              다른 라이브 스트리밍 플랫폼을 활용하여 행사를 진행합니다.
            </S.SubFont>
            <EventTypeCard handleEventType={handleEventType} />
            <S.ContentBox style={{ textAlign: 'left' }}>
              <S.FlexWrapper>
                <BlueButton contents={'행사 유형'} />
              </S.FlexWrapper>
              <S.MainFont>
                행사는 교내 행사인가요,
                <br /> 교외 행사인가요?
              </S.MainFont>
              <br />
              <S.SubFont>
                숙명여대 대상의 교내행사인지, 외부인 대상의 외부행사인지
                선택해주세요.
              </S.SubFont>
              <S.FlexWrapper style={{ justifyContent: 'start' }}>
                <S.EventRadio
                  name="eventType"
                  value="INTERNAL"
                  onClick={handleEventTarget}
                  defaultChecked
                />
                <S.ContentBox>
                  <S.MainFont style={{ fontSize: '24px' }}>
                    교내 행사
                  </S.MainFont>
                  <S.SubFont>
                    숙명여대 학생들만이 참가하는 행사로, <b>학번</b>을 통해
                    출석을 확인해요.
                  </S.SubFont>
                </S.ContentBox>
              </S.FlexWrapper>
              <S.FlexWrapper style={{ justifyContent: 'start' }}>
                <S.EventRadio
                  name="eventType"
                  value="EXTERNAL"
                  onClick={handleEventTarget}
                />
                <S.ContentBox>
                  <S.MainFont style={{ fontSize: '24px' }}>
                    교외 행사
                  </S.MainFont>
                  <S.SubFont>
                    외부인들이 참가하는 행사로, <b>전화번호</b>를 통해 출석을
                    확인해요.
                  </S.SubFont>
                </S.ContentBox>
              </S.FlexWrapper>
            </S.ContentBox>
            <S.FlexWrapper
              style={{
                justifyContent: 'end',
              }}
            >
              <S.MainButton onClick={stepUp}>다음으로 넘어가기</S.MainButton>
            </S.FlexWrapper>{' '}
          </S.ContentBox>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default RegisterFirst;
