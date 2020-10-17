import Axios from "axios";
import React, { useState } from "react";
import "./delete.styles.scss";

import axios from "axios";
import { IonButton } from "@ionic/react";

const Delete = ({url}) => {
  const handleDelete = (event) => {

    axios.delete(url+"/1").then(alert("Deleted")).catch(error => console.log(error))
  }
  return (
    <div className="">
      <h1>Delete</h1>
      <p>
        Delete post with id 1
      </p>
      <IonButton color="dark" onClick={handleDelete}>
        Delete
      </IonButton>
    </div>
  );
};

export default Delete;
