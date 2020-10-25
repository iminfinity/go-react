import React, { useEffect, useState } from "react";
import "./put.styles.scss";

import axios from "axios";
import {IonButton} from "@ionic/react";

const Put = ({url}) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const handleGet = (event) => {
    event.preventDefault();
    axios.get(url + "/" + id).then(response => response.data)
    .then(data => {
      setId(data.Id);
      setTitle(data.Title);
      setMessage(data.Message);
      setFirstName(data.Author["FirstName"]);
      setLastName(data.Author["LastName"]);
    })
    .catch(error => {
      alert(error.message)
    })
  }
  const handlePut = (event) => {
    event.preventDefault();
    axios
    .put(url + "/" + id,{
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
    alert("Update Successful")
  })
    .catch(error => console.log(error))
  }
  return (
    <div className="put-page">
       <h1>
        Update Post with ID
      </h1>
      <form onSubmit={handleGet}>
      <input type="text"  placeholder="ID" value={id} onChange={(event)=> setId(event.target.value)} required/>
        <IonButton color="primary" size="small" type="submit">
          Get
        </IonButton>
      </form>

    <form onSubmit={handlePut}>
      <div>
      <input type="text" placeholder="First Name" value={firstName} onChange={(event)=> setFirstName(event.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(event)=> setLastName(event.target.value)} />
      </div>
      <input type="text" placeholder="Title" value={title} onChange={(event)=> setTitle(event.target.value)} />
      <textarea placeholder="Message" value={message} onChange={(event)=> setMessage(event.target.value)} />
      <IonButton type="submit" size="small">
        Update
      </IonButton>
      </form>
    </div>
  );
};

export default Put;
