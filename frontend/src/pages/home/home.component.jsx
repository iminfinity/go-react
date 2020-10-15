import React, { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";

import axios from "axios";


const Home = () => {
  const [items, setItems] = useState([]);
  // const [url, setUrl] = useState("http://localhost:8000/posts");
  const [url, setUrl] = useState("https://go-react-rest.herokuapp.com/posts");
  
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
