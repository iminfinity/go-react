import React, {useState} from "react";
import "./get.styles.scss";

import axios from "axios";
import {IonButton} from "@ionic/react";

const Get = ({url}) => {
  const [id, setId] = useState("")
  const [item, setItem] = useState(null)
  const handleGet = (event) => {
    event.preventDefault();
    axios.get(url + "/" + id).then(response => response.data)
    .then(data => setItem(data))
    .catch(error => {
      setItem(null)
      alert(error.message)
    })
  }
  return (
    <div className="get-page">
      <h1>
        Get Post with ID
      </h1>
      <form onSubmit={handleGet}>
      <input type="text"  placeholder="ID" value={id} onChange={(event)=> setId(event.target.value)} required/>
        <IonButton color="primary" size="small" type="submit">
          Get
        </IonButton>
      </form>
      {
        item !== null ? (
      <div className="post"  key={item.Id} >
          <h1>
            {item.Author["FirstName"]}
            {" "} 
            {item.Author["LastName"]}
          </h1>
          {/* <h3>{item.Title}</h3> */}
          <p>{item.Message}</p>
        </div>
        ) : null
      }
    </div>
  );
};

export default Get;