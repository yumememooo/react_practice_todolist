import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

// HOW USE----------------------------
// import SuggestXInput from "./sample/form/SuggestXInput";
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <SuggestXInput
//       options={["life", "blog", "front-web", "go", "design", "others"]}
//     />
//   </React.StrictMode>,
//   rootElement
// );
// HOW USE----------------------------

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 6px 10px 6px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Suggest = (props) => {
  const classes = useStyles();
  // getValue(){
  //   return this.refs.lowlevelinput.valaue;
  // }

  // const handleClick = () => {
  //   inputRef.current.focus(); //滑鼠會跳到input的欄位
  // };
  const inputRef = useRef(null);
  const randomid = Math.random().toString(16).substring(2);
  return (
    <div>
      <input
        list={randomid}
        defaultValue={props.defaultValue}
        ref={inputRef}
        id={props.id}
        className={classes.input}
      />
      <datalist id={randomid}>
        {props.options.map((item, idx) => (
          <option value={item} key={idx} />
        ))}
      </datalist>
      {/* <button onClick={handleClick}>click me</button> */}
    </div>
  );
};

export default Suggest;
