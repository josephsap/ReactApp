import React from "react";

const Button = props => {
  return (
    <button
      id={props.id}
      type="button"
      className={`btn btn-primary ${props.className}`}
      data-toggle={props.dataToggle}
      data-target={props.dataTarget}
      onClick={props.onClick}
      value = {props.value}
    >
      {props.btnName}
    </button>
  );
};

export default Button;
