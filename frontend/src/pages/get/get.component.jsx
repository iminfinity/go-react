import React, {useState} from "react";
import "./get.styles.scss";

import axios from "axios";
import {IonButton} from "@ionic/react";

const Get = ({url}) => {
  const [id, setId] = useState("")
  const [data, setData] = useState({})
  const handleGet = (event) => {
    axios.get(url + "/" + id).then(response => response.data)
    .then(data => setData(data))
    .catch(error => console.log(error))
  }
  return (
    <div className="page">
      <input type="text" value={id} onChange={(event)=> setId(event.target.value)} required/>
      <IonButton color="dark" >
        Delete
      </IonButton>
    </div>
  );
};

export default Get;