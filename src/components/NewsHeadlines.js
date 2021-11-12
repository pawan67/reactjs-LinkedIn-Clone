import React from "react";
import faker from "faker";
function NewsHeadlines(props) {
  return (
    <div className="headlines">
        <div className="headline-wrapper
        ">
      <div className="headline-news">
        
        <span>•</span> <p>{props.content}</p>
      </div>
      <div className="headline-details">
        <p>{props.day}d ago</p>
        <p>{props.readers} readers</p>
      </div>
      </div>
    </div>
  );
}

export default NewsHeadlines;
