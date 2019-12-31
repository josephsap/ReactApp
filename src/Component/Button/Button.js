import React from "react";

const Button = props => {
  return (
    <button
      type="button"
      class="btn btn-primary"
      data-toggle={props.dataToggle}
      data-target={props.dataTarget}
    >
    see more
    </button>
  );
};

export default Button;
