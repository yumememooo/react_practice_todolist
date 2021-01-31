/** @jsx jsx */ import { css, jsx } from '@emotion/core';

export default function AppStyle() {}
export const wd = (props) => css`
  width: ${props.wd}px;
`;
const base = css`
  color: hotpink;
`;
export const myStyle = {
  Lable: css`
    top: 15px;
    left: 10px;
    position: absolute;

    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
    transform: translate(0px, 0px) scale(1);

    transition-property: transform;
    transition-duration: 0.2s;
    transition-delay: 0s;
  `,
  LableMove: css`
    ${wd};
    ${base};
    top: 10px;
    left: 10px;
    position: absolute;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
    transform: translate(-20px, -20px) scale(0.8);

    transition-property: transform;
    transition-duration: 0.2s;
    transition-delay: 0s;
  `,

  FormControl: css`
    border: 0;
    margin: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
  `,
  SHOW: {
    COLOR: css`
      background-color: #3f51b5;
      color: red;
    `,
    SMALL: css`
      font-size: 8x;
    `,
  },

  Input: {
    base: css`
      border: 1px solid #ced4da;
      padding: 10px 6px 10px 6px;
      position: relative;
      font-size: 16px;
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
      border-radius: 4px;
      background-color: #fff;
    `,
    focus: css`
      &:focus {
        //這邊＆後面不能有空白喔
        border: 1px solid #3f51b5;
      }
      // &:visited {
      //   z-index: 0;
      //   background-color: #fff;
      // }
      // &:focus + label {
      //   //這邊＆後面不能有空白喔
      //   top: 0;
      //   left: 0;
      //   position: relative;
      //   color: #3f51b5;
      //   padding: 0;
      //   font-size: 1rem;
      //   font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      //   font-weight: 400;
      //   line-height: 1;
      //   letter-spacing: 0.00938em;
      //   transform: translate(0, -50px) scale(1, 1);
      //   background-color: #fff;
      //   width: 50px;
      // }
    `,
  },
};
