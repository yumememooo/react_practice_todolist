import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
/** @jsx jsx */ import { css, jsx } from '@emotion/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formDiv: {
    display: 'flex',
    justifyContent: 'center', //---左右置中
    alignItems: 'center', //---排列上下置中
  },
  formControl: {
    margin: '10px',
    //marginTop: theme.spacing.unit * 2,
    minWidth: 200,
    maxWidth: 300,
  },
  button: {
    margin: '10px',
    width: '130px',
  },
  Red: {
    color: 'red', //color: red 沒有加雙引號是錯誤寫法
  },
  //   ErrorDiv: css`
  //     //不知道為什麼這種寫法引用沒效果 解析不出來
  //     height: 11px;
  //     font-size: 12px;
  //     color: #ea645e;
  //     font-weight: Regular;
  //     line-height: 14px;
  //     letter-spacing: 0.73px;
  //     margin-top: 8px;
  //   `,
}));

export const ErrorLabel = styled.label`
  //換一種寫法
  height: 11px;
  font-size: 12px;
  color: #ea645e;
  font-weight: Regular;
  line-height: 14px;
  letter-spacing: 0.73px;
  margin-top: 8px;
`;

export const myStyle = {
  BarHead: css`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: #515258;
  `,
  OutlinedInputxx: css`
    background-color: #fff;
  `,
};
