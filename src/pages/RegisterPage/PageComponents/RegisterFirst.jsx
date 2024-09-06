import * as S from './RegisterFirst.style';
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
    <S.RegisterFirstPage>
      <S.ContentBox>
        <S.FlexWrapper>
          <BlueButton contents={'진행 방식'} />
        </S.FlexWrapper>
        <S.TitleWrapper>
          <S.MainTitle>
            행사가 <span>온라인</span>인가요, <span>오프라인</span>인가요?
          </S.MainTitle>
          <S.SubTitle>
            다른 라이브 스트리밍 플랫폼을 활용하여 행사를 진행합니다.
          </S.SubTitle>
        </S.TitleWrapper>
        <EventTypeCard handleEventType={handleEventType} />
      </S.ContentBox>

      <S.ContentBox>
        <S.FlexWrapper>
          <BlueButton contents={'행사 유형'} />
        </S.FlexWrapper>
        <S.FlexWrapper>
          <EventTargetOption
            value="INTERNAL"
            selectedValue={eventTarget}
            onSelect={setEventTarget}
          />
        </S.FlexWrapper>
        <S.FlexWrapper>
          <EventTargetOption
            value="EXTERNAL"
            selectedValue={eventTarget}
            onSelect={setEventTarget}
          />
        </S.FlexWrapper>

        <S.ButtonWrapper>
          <Button label="다음으로 넘어가기" onClick={stepUp} type="button" />
        </S.ButtonWrapper>
      </S.ContentBox>
    </S.RegisterFirstPage>
  );
};

export default RegisterFirst;
