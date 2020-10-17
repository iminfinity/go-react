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
    <div>
      <h1>Post</h1>
      <form onSubmit={handlePost}>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default Post;


