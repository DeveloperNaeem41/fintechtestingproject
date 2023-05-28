import React from "react";

const SubHeader = () => {
  return (
    <>
      <section className="sub-header_container hr_b">
        <div className="sub-head_title">
          신청 목록
          <span>(총 100명 | 승인대기</span>
          <span className="single-color">1</span>
          <span>건)</span>
        </div>
        <div className="select-items">
          <select>
            <option>승인여부 전체</option>
          </select>
          <select>
            <option>신청일시순</option>
          </select>
          <select>
            <option>50개씩 보기</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default SubHeader;
