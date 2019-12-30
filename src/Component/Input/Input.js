import React from "react";

const Input = props => {
  return (
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>{props.label || "Enter movie name"}</label>
          <input
            id="inputmovie"
            placeholder="Enter movie name..."
            value={props.value}
            onKeyDown={props.onKeyDown}
            onChange={props.onChange}
          ></input>
        </div>
      </div>
  );
};

export default Input;
