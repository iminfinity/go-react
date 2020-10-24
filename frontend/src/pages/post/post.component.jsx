import React, { useEffect, useState } from "react";
import "./post.styles.scss";

import {IonButton} from "@ionic/react";
import axios from "axios";

const Post = ({url}) => {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const handlePost = (event) => {
    event.preventDefault();
    axios
    .post(url,{
      "title" : title,
      "message" : message,
      "author" : {
          "firstname":firstName,
          "lastname": lastName
      }
  }).then(()=>{
    setTitle("")
    setMessage("")
    setFirstName("")
    setLastName("")
    alert("Post Successful")
  })
    .catch(error => console.log(error))
  }

  return (
    <div className="post-page">
      <h1>Add a new Post </h1>
      <form onSubmit={handlePost}>
        <div>
        <input type="text" placeholder="First Name" value={firstName} onChange={(event)=> setFirstName(event.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(event)=> setLastName(event.target.value)} />
        </div>
        <input type="text" placeholder="Title" value={title} onChange={(event)=> setTitle(event.target.value)} />
        <textarea placeholder="Message" value={message} onChange={(event)=> setMessage(event.target.value)} />
        <IonButton type="submit" size="large">
          Post
        </IonButton>
      </form>
    </div>
  );
};

export default Post;


