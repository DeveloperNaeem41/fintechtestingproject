import React, { useState } from 'react';

const NavBar = () => {
  const [active, setActive] = useState(null);
  const navItems = [
    '기본정보 관리',
    '투자유형 관리',
    '입출금내역 조회',
    '영업내역 조회',
    '투자내역 조회',
    '채권내역 조회',
    'SMS 관리',
    '상담내역 관리',
    '1:1문의내역 조회',
  ];
  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <>
      <nav className='nav-container'>
        {navItems.map((item, index) => (
          <div
            className={` ${active === index ? 'active-item' : 'items'}`}
            onClick={() => handleActive(index)}
            key={index}
          >
            {item}
          </div>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
