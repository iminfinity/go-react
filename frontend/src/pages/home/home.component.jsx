import React, { useEffect, useState } from "react";
import { IonButton } from "@ionic/react";

import axios from "axios";


const Home = () => {
  const [items, setItems] = useState("items");
  useEffect(() => {
    axios.get("http://go-react-rest.herokuapp/posts/1").then(response => response.data).then(data => console.log(data)).catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <p>
        {items}
      </p>
    </div>
  );
};

export default Home;
