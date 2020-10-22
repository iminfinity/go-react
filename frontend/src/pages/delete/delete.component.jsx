import Axios from "axios";
import React, { useState } from "react";
import "./delete.styles.scss";

import axios from "axios";
import { IonButton } from "@ionic/react";

const Delete = ({url}) => {
  const [id, setId] = useState("")
  const handleDelete = (event) => {
    axios.delete(url + "/" + id).then(alert("Deleted")).catch(error => console.log(error))
  }
  return (
    <div className="page">
      <input type="text" value={id} onChange={(event)=> setId(event.target.value)} required/>
      <IonButton color="dark" onClick={handleDelete}>
        Delete
      </IonButton>
    </div>
  );
};

export default Delete;
