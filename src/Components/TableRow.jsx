import React from "react";
import { data } from "../Utils/DummyData";
const TableRow = () => {
  return (
    <>
      {data.map((data, index) => (
        <div className="table-row h--44">
          <div className="w--50 text-style-1 ">
            <input type="checkbox" />
          </div>
          <div className="w--53 text-style-1 ">{index + 1}</div>
          <div className="w--100 text-style-1">{data?.first}</div>
          <div className="w--100 text-style-1">{data?.second}</div>
          <div className="w--100 text-style-1">
            <button>보기</button>
          </div>
          <div className="w--190 text-style-1">{data?.date}</div>
          <div className="w--87 text-style-1">
            <div
              className={`${
                data?.pending
                  ? "pending"
                  : data?.success
                  ? "success"
                  : data?.error && "error"
              }`}
            >
              {" "}
              <span>{data?.pending || data?.success || data?.error}</span>
            </div>
          </div>
          <div className="w--372 text-style-1 desc_style"> {data?.para}</div>
          <div className="w--190 text-style-1">{data?.date}</div>
        </div>
      ))}
    </>
  );
};

export default TableRow;
