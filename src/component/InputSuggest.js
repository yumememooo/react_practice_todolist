/** @jsx jsx */ import { jsx } from '@emotion/core';

import React, { useRef, useState } from 'react';

import { myStyle, wd } from './Style/InputSuggest_Style';

const Suggest = (props) => {
  // const handleClick = () => {
  //   inputRef.current.focus(); //滑鼠會跳到input的欄位
  // };
  const [LabelCss, setLabelCss] = useState(myStyle.Lable);
  const handleChangeValue = (event) => {
    console.log(inputRef.current.value);

    props.func(inputRef.current.value);
  };
  const handleFoucus = () => {
    setLabelCss(myStyle.LableMove);
    wd(props);
  };

  const handleBlur = () => {
    const len = inputRef.current.value.length;
    if (len === 0) {
      console.log('0');
      setLabelCss(myStyle.Lable);
    }
  };

  const inputRef = useRef(null);
  const randomid = Math.random().toString(16).substring(2);
  return (
    <div css={myStyle.FormControl}>
      <input
        list={randomid} // defaultValue={props.defaultValue}
        ref={inputRef}
        id={props.id}
        wd="300"
        css={[myStyle.Input.base]}
        onChange={handleChangeValue}
        onFocus={handleFoucus}
        onBlur={handleBlur}
      />
      <label htmlFor="xx" css={LabelCss}>
        {props.defaultValue}
      </label>
      <datalist id={randomid}>
        {props.options.map((item, idx) => (
          <option value={item} key={idx} />
        ))}
      </datalist>
    </div>
  );
};

export default Suggest;
