import React, { useEffect, useState } from "react";
import "./home.styles.scss";

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
    <div className="home-page">
      {
        items.map(item => {
        return (
        <div className="post"  key={item.Id} >
          <h1>
            {item.Author["FirstName"]}
            {" "} 
            {item.Author["LastName"]}
          </h1>
          {/* <h3>{item.Title}</h3> */}
          <p>{item.Message}</p>
        </div>
        )
        })
      }
    </div>
  );
};

export default Home;
