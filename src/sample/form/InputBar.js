import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Popper,
  List,
  ListItem,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { css } from 'emotion';
import styled from '@emotion/styled';
import Input from '@material-ui/core/Input';
// HOW USE----------------------------
// import InputBar from "./sample/form/InputBar";
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <InputBar />
//   </React.StrictMode>,
//   rootElement
// );
// HOW USE----------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
  },
  formControl: {
    //marginTop: theme.spacing.unit * 2,
    minWidth: 200,
    maxWidth: 300,
  },
  button: {
    margin: theme.spacing(1),
    width: '100px',
  },
  Red: {
    color: 'red', //color: red 沒有加雙引號是錯誤寫法
  },
  Field: {
    margin: '20px 0',
  },
  ErrorDiv: css`
    //不知道為什麼這種寫法引用沒效果 解析不出來
    height: 11px;
    font-size: 12px;
    color: #ea645e;
    font-weight: Regular;
    line-height: 14px;
    letter-spacing: 0.73px;
    margin-top: 8px;
  `,
}));

const ErrorLabel = styled.label`
  //換一種寫法
  height: 11px;
  font-size: 12px;
  color: #ea645e;
  font-weight: Regular;
  line-height: 14px;
  letter-spacing: 0.73px;
  margin-top: 8px;
`;

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [task, inputTask] = useState('');
  const [isOK, setIsok] = useState(true);
  const [TaskName, setTaskName] = useState('');
  const [TaskNamelen, setTaskNamelen] = useState(0);
  const [isValidName, setIsValidName] = useState(true);
  const [errorText, setErrorText] = useState('');

  const handleChangeValue = (e, fieldName) => {
    const { value } = e.target;
    console.log(value);
    if (fieldName === 'TaskName') {
      setTaskName(value);
      const len = [...value].length;
      if (TaskNamelen > 10) {
        setIsValidName(false);
        setErrorText('no');
      } else {
        setIsValidName(true);
        setErrorText('');
      }
      setTaskNamelen(len);
    }
  };
  const handleTaskChange = (event) => {
    inputTask(event.target.value);

    setIsok(true);
    if (event.target.value.length >= 10) {
      setIsok(false);
    }
  };
  const handleTaskChange = (event) => {
    inputTask(event.target.value);

    setIsok(true);
    if (event.target.value.length >= 10) {
      setIsok(false);
    }
  };

  const handleSubmit = (event) => {
    // props.changefunc([...props.data, createData(task, 305, 3.7, 67, 4.3)]);

    event.preventDefault();
  };
  const inputRef = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <FormControl className={classes.formControl} variant="outlined">
            <TextField
              id="standard-basic"
              error={!isOK}
              label="Task"
              helperText={isOK ? '' : 'text length too long.'}
              value={task}
              onChange={handleTaskChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="standard-basic">TaskName</InputLabel>
            <Input
              id="standard-basic"
              error={!isValidName}
              label="TaskName"
              helperText={isOK ? '' : 'text length too long.'}
              // value={task}
              onChange={(e) => handleChangeValue(e, 'TaskName')}
              endAdornment={
                <InputAdornment position="end">{`${TaskNamelen}/10`}</InputAdornment>
              }
            />

            <ErrorLabel>{errorText}</ErrorLabel>
          </FormControl>

          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel ref={inputRef} htmlFor="TaskName">
              TaskName
            </InputLabel>
            <OutlinedInput
              name="TaskName"
              onChange={(e) => handleChangeValue(e, 'TaskName')}
              error={!isValidName}
              variant="outlined"
              //value={TaskName ? TaskName : undefined}
              endAdornment={
                <InputAdornment position="end">{`${TaskNamelen}/10`}</InputAdornment>
              }
              labelWidth={labelWidth} //這樣寫 莫名其妙寫好了＠＠
            />
            {/*不知道為什麼這種寫法引用沒效果 解析不出來
             <label className={classes.ErrorDiv}>{errorText}</label> */}

            <ErrorLabel>{errorText}</ErrorLabel>
          </FormControl>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddIcon>send</AddIcon>}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
