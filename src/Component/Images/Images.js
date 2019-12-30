import React from "react";

const Images = props => {
  return (
    props.data && 
    <div>
      <img src={props.data && props.data.Poster} className="img-fluid" alt={props.alt}></img>
        <p>{props.data.Title ? 'Title:'+ props.data.Title: ''}</p>
        <p>{props.data.Released ?'Release:' + props.data.Released: ''}</p>
        <p>{props.data.Genre ? 'Genre:' + props.data.Genre: ''}</p>
    </div>
  );
};

export default Images;
