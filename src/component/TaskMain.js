import React, { useState, useEffect } from 'react';
import SimpleTabs from './SimpleTabs';
import InputBar from './InputBar';
import { createData, statusList } from './helper';
import * as R from 'ramda';
import Container from '@material-ui/core/Container';

const defaultRows = [
  createData('寫一篇部落格 for go', 1, statusList.Open, 'blog', 4.3),
  createData('寫一篇Go ', 2, statusList.InProgress, 'go', 4.9),
  createData('寫一篇初始化go', 1, statusList.Open, 'go', 6.0),
  createData('練習前端table改寫', 2, statusList.Open, 'life', 4.0),
  createData('練習前端tab改寫', 1, statusList.Open, '', 3.9),
  createData('練習前端格式改寫', 2, statusList.Open, '', 6.5),
  createData('前端格式整理', 3, statusList.Open, '', 4.3),
  createData('寫一篇部落格 for 前端', 3, statusList.Done, '', 0.0),
  createData('寫一篇部落格 for 工具', 2, statusList.Open, '', 7.0),
];

export default function TaskMain() {
  //以下這兩個要寫在TaskMain裡＠＠？
  const [rows, setRows] = useState([]);
  useEffect(() => {
    /* componentDidMount 區*/
    setRows(defaultRows);
    // return () => {
    //   /* componentWillUnmount區 */
    //   setRows([])
    // };
  }, []); //if have content, componentDidUpdate

  // 父層新增可以改變資料的地方
  const changeData = (data) => {
    setRows(data);
    console.log('changeData' + data);
  };
  const addOneData = (data) => {
    setRows([...rows, data]);
    console.log('addOneData' + data);
  };

  // 清空資料
  const cleanData = () => {
    console.log('clean data');
    setRows([]);
  };
  const Data = () => {
    console.log(' data');
    console.log(rows);
    var s = R.filter(R.propEq('name', 'Cupcake'), rows);
    console.log(s);
  };

  return (
    <Container maxWidth="lg">
      <InputBar addOneData={addOneData} />
      <p></p>
      <SimpleTabs data={rows} changefunc={changeData} />
      <button onClick={Data}>資料</button>
      <button onClick={cleanData}>清空資料</button>
    </Container>
  );
}
