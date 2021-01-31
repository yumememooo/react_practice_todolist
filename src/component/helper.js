//ES6 - 使用module分檔 (import & export)
//https://ithelp.ithome.com.tw/articles/10215265
export const createData = (name, priority, status, type, date) => {
  // console.log("hello world!");
  return { name, priority, status, type, date };
};

export var statusList = {
  Open: 'Open',
  InProgress: 'In Progress',
  Done: 'Done',
};

//format:YYYY-MM-DD
export const getToday = () => {
  var Today = new Date();
  //2020-10-3
  //http://zhi-yuan-chenge.blogspot.com/2015/10/jsjavascript_16.html
  //https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
  //補0的三種方法
  var dateString =
    Today.getFullYear() +
    '-' +
    ('0' + (Today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + Today.getDate()).slice(-2);

  console.log(dateString); //2020-10-03
  return dateString;
};
