import React from "react";
import { useHistory } from "react-router-dom";
import "./post-styles.css";

export default function Post({ id, url, title, date}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/post/${id}`);
  }

  

  return (
    <li id="postAndButton">
      <div id="postPreview" onClick={handleClick}>
        <img src={url} alt="thumbnail" />
        <h2>{title}</h2>
        <em>{date}</em>
      </div>
      
    </li>
  );
}
