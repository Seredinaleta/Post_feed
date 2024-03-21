import React from "react";
import classes from "./MyInput.module.css";

//Використання функції forwardRef() для некерованого інпуту (додаємо ref в пропси)
const MyInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.myInput} {...props} />
  )
});



export default MyInput;