import React from "react";

const Card = props => {
  return (
    <div className="card">
    <div className="card-body">
      {props.content}
    </div>
  </div>
  )
}

  export default Card;