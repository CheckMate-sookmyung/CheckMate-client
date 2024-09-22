import * as S from './EventTypeRadioGroup.style';

const EventTypeRadioGroup = ({ value, onChange }) => {
  return (
    <S.FlexWrapper style={{ flexWrap: 'wrap' }}>
      <S.ChoiceBox
        onClick={() => onChange('ONLINE')}
        isSelected={value === 'ONLINE'}
      >
        <S.TitleWrapper>
          <S.Category>온라인 행사</S.Category>
          <S.CategoryMini>On-line Event</S.CategoryMini>
        </S.TitleWrapper>
        <S.CustomImage src="/img/ONLINE.svg" alt="온라인 이미지" />
      </S.ChoiceBox>

      <S.ChoiceBox
        onClick={() => onChange('OFFLINE')}
        isSelected={value === 'OFFLINE'}
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

export default EventTypeRadioGroup;
