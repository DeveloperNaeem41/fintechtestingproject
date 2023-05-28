import React from "react";

const Table = () => {
  return (
    <>
      <div className="table-menu">
        <div className="row h--50 ">
          <div className="table-sub_box text--center hr_b-white">회원번호</div>
          <div className="pl--20 hr_b w--592 text--center">abc111</div>
        </div>
        <div className="row h--50 ">
          <div className="table-sub_box text--center hr_b-white">
            회원명/법인명
          </div>
          <div className="pl--20 hr_b w--592 text--center">김길동</div>
        </div>
        <div className="row h--50 ">
          <div className="table-sub_box text--center hr_b-white">
            투자유형<span className="single-color">*</span>{" "}
          </div>
          <div className="hr_b mt--5 w--592 pl--20">
            <select className="table_select">
              <option>일반개인</option>
            </select>
          </div>
        </div>
        <div className="row h--50 ">
          <div className="table-sub_box-last text--center ">
            서류첨부
            <span className="single-color">*</span>
          </div>
          <button className="table_button mt--5 ">파일 선택</button>
        </div>
      </div>
    </>
  );
};

export default Table;
