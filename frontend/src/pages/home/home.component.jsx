import React, { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";

import axios from "axios";


const Home = ({url}) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios
    .get(url) 
    .then(response => response.data)
    .then(data => {
      setItems(data);
      console.log(data);
    })
    .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h1>Home</h1>
        {
          items.map(item => {
          return (
          <p  key={item.Id}>
            <h1>
              {item.Author["FirstName"]} 
              {item.Author["LastName"]}
            </h1>
            <em>{item.Message}</em>
          </p>
          )
          })
        }
    </div>
  );
};

export default Home;
