import * as S from './RegisterPage.style';
import {
  eventTargetState,
  eventTypeState,
  RegisterStep,
} from '@/recoil/atoms/state';
import { useRecoilState, useSetRecoilState } from 'recoil';
import BlueButton from '../RegisterComponents/Button/BlueButton';
import { EventTypeCard, EventTargetOption, Button } from '@/components';

const RegisterFirst = () => {
  const Step = useSetRecoilState(RegisterStep);
  const [eventType, setEventType] = useRecoilState(eventTypeState);
  const [eventTarget, setEventTarget] = useRecoilState(eventTargetState);

  const handleEventType = (status) => {
    setEventType(status);
  };

  const stepUp = () => {
    Step(2);
  };

  return (
    <S.RegisterPage>
      <S.CenteredRegisterPage>
        <S.RegisterCategory>
          <S.BlueButtonWrapper>
            <BlueButton contents={'진행 방식'} />
          </S.BlueButtonWrapper>
          <S.ContentBox>
            <S.ContentWrapper>
              <S.TitleWrapper>
                <S.MainTitle>
                  행사가&nbsp; <span>온라인</span>&nbsp;인가요, &nbsp;
                  <span>오프라인</span>&nbsp; 인가요?
                </S.MainTitle>
                <S.SubTitle>
                  다른 라이브 스트리밍 플랫폼을 활용하여 행사를 진행합니다.
                </S.SubTitle>
              </S.TitleWrapper>
              <EventTypeCard handleEventType={handleEventType} />
            </S.ContentWrapper>
          </S.ContentBox>
        </S.RegisterCategory>
        <S.RegisterCategory>
          <S.BlueButtonWrapper>
            <BlueButton contents={'행사 유형'} />
          </S.BlueButtonWrapper>
          <S.ContentBox>
            <S.ContentWrapper>
              <S.ContentWrapper>
                <EventTargetOption
                  value="INTERNAL"
                  selectedValue={eventTarget}
                  onSelect={setEventTarget}
                />
                <EventTargetOption
                  value="EXTERNAL"
                  selectedValue={eventTarget}
                  onSelect={setEventTarget}
                />
              </S.ContentWrapper>
            </S.ContentWrapper>
          </S.ContentBox>
        </S.RegisterCategory>
        <S.ButtonWrapper>
          <Button label="다음으로 넘어가기" onClick={stepUp} type="button" />
        </S.ButtonWrapper>{' '}
      </S.CenteredRegisterPage>
    </S.RegisterPage>
  );
};

export default RegisterFirst;
