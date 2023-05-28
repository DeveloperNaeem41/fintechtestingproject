import React from 'react';
import Modal from 'react-modal';
import Table from './Table';

const DescriptionModal = ({
  colorbutton = '확인',
  button2 = '취소',
  isOpen,
  onClick,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        className='general-modal w--800  pX--24 pY--24 h--464 '
        overlayClassName='general-Modal-overlay'
      >
        <div className='row space-between pb--20 hr_b '>
          <div className='modal--title'>투자유형 변경</div>
          <img alt='cross' onClick={onClick} src='/images/crossIcon.svg' />
        </div>
        <Table />
        <div>
          <ul>
            <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
            <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
          </ul>
        </div>
        <div className='mt--22 hr_b'></div>
        <div className='row center mt--20 mb--20'>
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

export default DescriptionModal;
