import React from "react";
import style from "./button.module.css";

const Button = ({onClickFunc}) => {
  return (
    <button className={style.glowOnHover} onClick={onClickFunc}>
      Click to know
    </button>
  );
};

export default Button;
