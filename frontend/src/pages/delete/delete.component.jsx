import Axios from "axios";
import React, { useState } from "react";
import "./delete.styles.scss";

import axios from "axios";
import { IonButton } from "@ionic/react";

const Delete = ({url}) => {
  const [id, setId] = useState("")
  const [item, setItem] = useState(null)
  const handleDelete = (event) => {
    event.preventDefault();
    axios
    .delete(url + "/" + id)
    .then(response => response.data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }
  return (
    <div className="delete-page">
      <h1>Delete post with ID </h1>
      <form onSubmit={handleDelete}>
        <input type="text"  placeholder="ID" value={id} onChange={(event)=> setId(event.target.value)} required/>
        <IonButton color="danger" type="submit">
          Delete
        </IonButton>
      </form>
      {
        item === null ? null : (
          item.Id !== " " ?
            (
            <div className="post" >
            <h1>
              Deleted
            </h1>
            <h1>
            {item.Author["FirstName"]}
            {item.Author["LastName"]}
            </h1>
              <p>{item.Message}</p>
          </div>
            ) : (
            <div className="post" >
              <h1>Error</h1>
              <p>
                ID not found
              </p>
              </div>
            )
        ) 
      }
    </div>
  );
};

export default Delete;
