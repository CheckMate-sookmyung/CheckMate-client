import { eventTypeState } from '@/recoil/atoms/state';
import { useRecoilState } from 'recoil';
import * as S from './EventTypeCard.style';

const EventTypeCard = ({ handleEventType }) => {
  const [eventType, setEventType] = useRecoilState(eventTypeState);

  return (
    <S.FlexWrapper style={{ flexWrap: 'wrap' }}>
      <S.ChoiceBox
        onClick={() => handleEventType('ONLINE')}
        isSelected={eventType === 'ONLINE'}
      >
        <S.TitleWrapper>
          <S.Category>온라인 행사</S.Category>
          <S.CategoryMini>On-line Event</S.CategoryMini>
        </S.TitleWrapper>
        <S.CustomImage src="/img/ONLINE.svg" alt="온라인 이미지" />
      </S.ChoiceBox>

      <S.ChoiceBox
        onClick={() => handleEventType('OFFLINE')}
        isSelected={eventType === 'OFFLINE'}
      >
        <S.TitleWrapper>
          <S.Category>오프라인 행사</S.Category>
          <S.CategoryMini>Off-line Event</S.CategoryMini>
        </S.TitleWrapper>
        <S.CustomImage src="/img/OFFLINE.svg" alt="오프라인 이미지" />
      </S.ChoiceBox>
    </S.FlexWrapper>
  );
};

export default EventTypeCard;
