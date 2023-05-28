import React from 'react';
import Modal from 'react-modal';
const Modals = ({
  isOpen,
  onClick,
  src = '/images/warning.svg',
  title = '선택된 2건의 승인상태를 변경하시겠습니까?',
  colorbutton = '확인',
  button2 = '취소',
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName='general-Modal-overlay'
        className='general-modal h--198 w--400 pX--24 pY--24'
      >
        <div className='row space-between'>
          <div>
            <img onClick={onClick} src={src} />{' '}
          </div>
          <div>
            <img src='/images/crossIcon.svg' />
          </div>
        </div>
        <div className='modal--title'>{title}</div>
        <div className='row center mt--20'>
          <button className='colored_button' onClick={onClick}>
            {colorbutton}
          </button>
          <button className='border-button' onClick={onClick}>
            {button2}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
