import React, { Component } from 'react';
export default class GetApiData extends Component {
  constructor(props) {
    super(props);
    this.state={
      repoName: null
    }
    this.handleClick=this.handleClick.bind(this);
  }

  
  handleClick(){
    fetch( 'https://api.github.com/users/jserv/repos',{method:"GET"})
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
          this.setState({repoName: data[0]['name']});
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
    })
  }
  
  render() {
      return (
        <div className="App">
             <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
          <div className="data-display">
            {(this.state.repoName===null)?"目前還有沒有資料":this.state.repoName}
          </div>
         
    	</div>
    )
  }
};


/*Readme: How to use it-----------------------------------*/
// import GetApiData from './sample/GetApiData';  //add me
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//        <GetApiData/>  //add me
//   </React.StrictMode>,
//   rootElement
// );
