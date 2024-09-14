import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as S from './Modal.style';

const Modal = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <S.Backdrop />
      <S.ModalLayout>{children}</S.ModalLayout>
    </>,
    document.getElementById('root'),
  );
};

export default Modal;
