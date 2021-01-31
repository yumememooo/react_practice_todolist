import React, { useState, useEffect } from "react";
//拿資料及移除的範例

  const Data = props => {  
    const [isGetData, setGetData] = useState(false);
    const [delayData, setDelayData] = useState("");

  useEffect(() => {
    /* componentDidMount 區*/
    ajaxSimulator();
    document
      .getElementById("textArea")
      .append("[id:textArea]我是在Mount時新增出現在APP裡的區塊!");
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("textArea").appendChild(node);

    return () => {
      /* componentWillUnmount區 */
      document.getElementById("textArea").innerHTML = "";
    };
  }, []);



    const ajaxSimulator = () => {
      setTimeout(() => {
        setGetData(true);
        setDelayData("3秒後拿到的資料");
      }, 3000);
    };
  

  if (isGetData === false)
    return (
      <div className="content-bady" id="msg">
        讀取中...
      </div>
    );
  else
    return (
      <div className="content-bady" id="msg">
        讀取完了 資料是{delayData}
      </div>
    );
};
export default Data;
