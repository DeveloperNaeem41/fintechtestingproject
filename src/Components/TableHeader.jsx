import React, { useState } from 'react';
import Modals from './Modals';
import DescriptionModal from './DescriptionModal';

const TableHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsRegisterOpen(!isRegisterOpen);

  return (
    <>
      <section className='table_head'>
        <button onClick={toggle1}>등록</button>
        <div className='row mr--8'>
          <div className='desc-head'>선택한 0건</div>
          <select>
            <option>승인상태 변경</option>
          </select>
          <button onClick={toggle}>저장</button>
        </div>
      </section>
      <Modals isOpen={isOpen} onClick={toggle} />
      <DescriptionModal isOpen={isRegisterOpen} onClick={toggle1} />
    </>
  );
};

export default TableHeader;
