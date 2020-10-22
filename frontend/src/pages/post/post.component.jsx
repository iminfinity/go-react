import React, { useEffect, useState } from "react";
import "./post.styles.scss";

import axios from "axios";
const Post = ({url}) => {
  const handlePost = (event) => {
    event.preventDefault();
    axios
    .post(url,{
      "title" : "Post four",
      "message" : "Message 4",
      "author" : {
          "firstname": "Javen",
          "lastname": "Dol"
      }
  }) 
    .catch(error => console.log(error))
  }

  return (
    <div className="page">
      <form onSubmit={handlePost}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Title" />
        <textarea placeholder="Message" />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default Post;


