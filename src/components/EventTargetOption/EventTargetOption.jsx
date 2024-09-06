import * as S from './EventTargetOption.style';

const EventTargetOption = ({ value, selectedValue, onSelect }) => {
  const isInternal = value === 'INTERNAL';

  return (
    <S.EventTarget onClick={() => onSelect(value)}>
      <S.EventTargetRadioButton
        type="radio"
        name="eventTarget"
        value={value}
        checked={selectedValue === value}
        readOnly
      />
      <S.EventTargetWrapper>
        <S.EventTargetTitle>
          {isInternal ? '교내 행사' : '교외 행사'}
        </S.EventTargetTitle>
        <S.EventTargetDescription>
          {isInternal ? (
            <>
              <S.Highlight>숙명여대 학생</S.Highlight>들이 참가하는 행사로,
              <S.Highlight>학번</S.Highlight>을 통해 출석을 확인해요.
            </>
          ) : (
            <>
              <S.Highlight>외부인</S.Highlight>들이 참가하는 행사로,{' '}
              <S.Highlight>전화번호</S.Highlight>를 통해 출석을 확인해요.
            </>
          )}
        </S.EventTargetDescription>
      </S.EventTargetWrapper>
    </S.EventTarget>
  );
};

export default EventTargetOption;
