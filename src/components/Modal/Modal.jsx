import PropTypes from 'prop-types';
import * as S from './Modal.style';
import { CheckBoxIcon, CheckboxCheckedIcon } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Portal from '../Portal/Portal';
import axios from 'axios';
const REACT_BASE_URL = 'http://3.37.229.221/api/v1';
const USER_ID = 100;
const EVENT_ID = 2;
const STUDENT_ID = 516; //출석안됨

const Modal = ({ name, major, studentId, isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckBoxInputChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCompletedButtonClick = async () => {
    try {
      const response = await axios.get(
        `${REACT_BASE_URL}/attendance/check/${USER_ID}/${EVENT_ID}/${STUDENT_ID}`,
        {
          headers: {
            'Content-Type': 'application/json',
            // 'ngrok-skip-browser-warning': '69420',
          },
        },
      );
      console.log(response.data);

      onClose();
      navigate('/attendance/sign');
    } catch (error) {
      console.error('미성에러', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey="modal-layout">
      <S.ModalLayout>
        <S.Title>
          <strong>{name}</strong>님이 맞으십니까?
        </S.Title>
        <S.ContentContainer>
          <S.Content>
            <S.ContentTitle>학과</S.ContentTitle>
            <S.ContentDescription>{major}</S.ContentDescription>
          </S.Content>
          <S.Content>
            <S.ContentTitle>학번</S.ContentTitle>
            <S.ContentDescription>{studentId}</S.ContentDescription>
          </S.Content>
        </S.ContentContainer>
        <S.CheckBoxLabel htmlFor="confirm">
          <S.CheckBoxInput
            id="confirm"
            type="checkbox"
            name="confirm"
            onChange={handleCheckBoxInputChange}
          />
          {isChecked ? <CheckboxCheckedIcon /> : <CheckBoxIcon />}
          <S.CheckContent>네, 본인이 맞습니다.</S.CheckContent>
        </S.CheckBoxLabel>
        <S.CompletedButton
          disabled={!isChecked}
          onClick={handleCompletedButtonClick}
        >
          서명하러 하기
        </S.CompletedButton>
      </S.ModalLayout>
    </Portal>
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  studentId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
