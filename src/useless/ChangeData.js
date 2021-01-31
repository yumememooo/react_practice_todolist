//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
//用來改變資料內容的範例
const ChangeData = props => {
  const [Data, setData] = useState("初始資料");
  const [isRightData, setRightData] = useState(true);
  const handleClick = () => {

    setRightData(!isRightData);
  };
  
  useEffect(() => {
    if (props.detail === "B") setData("B");
  }, [props.detail]);

  useEffect(() => {
    setData("isRightData被更改");
  }, [isRightData]);
  return (
 
    <div className="c-chgData" id="msg">
      資料可以被改變的內容區塊:{Data}
      <div>
        <p>在元件內設一個按鈕也可以更變State，也可以觸發</p>
        <button onClick={handleClick}>
          {isRightData === true ? "點我更改state(isRightData)" : "沒設定什麼"}
        </button>
      </div>
    </div>
  );
  
};
export default ChangeData;
