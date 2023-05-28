import React from "react";
import TableRow from "./TableRow";

const MainTable = () => {
  return (
    <>
      <div class="table-container">
        <div class="table-content">
          <div class="table-row">
            <div className="table-row">
              <div className="table_row_item w--50">
                <input type="checkbox" />
              </div>
              <div className="table_row_item-2 text_style w--53">NO</div>
              <div className="table_row_item-2 text_style w--100">기존유형</div>
              <div className="table_row_item-2 text_style w--100">신청유형</div>
              <div className="table_row_item-2 text_style w--100">제출서류</div>
              <div className="table_row_item-2 text_style w--190">신청일시</div>
              <div className="table_row_item-2 text_style w--87">승인여부</div>
              <div className="table_row_item-2 text_style w--372 ">
                승인거부 사유
              </div>
              <div className="table_row_item-2 text_style w--190">승인일시</div>
            </div>
          </div>
          <TableRow />
        </div>
      </div>
    </>
  );
};

export default MainTable;
