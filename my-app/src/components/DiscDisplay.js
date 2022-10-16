import Button from "@mui/material/Button";
import React from "react";
import { useState, useEffect } from "react";



function DiscDisplay(props) {
const [ loggedUser , setLoggedUser] = useState("")
const [ name, setName] = useState('')
const [ manufacturer, setManufacturer] = useState('')

console.log(loggedUser)

  const handleAdd = async (event) => { 
    setName(props[0].name)
    setManufacturer(props[0].manufacturer)
      event.preventDefault();
      console.log(" handle add hittin")
      try {
       
        let res = await fetch ("/users/addDisc/6344814771f5b76fe4b7c0ae" , {
          method: "PATCH", 
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            manufacturer: manufacturer,
            name: name,
          }),
        });
        console.log(res)
        const disc = await res.json();
        console.log(disc)
      } catch (error) {
        
      }

  }
  const getUser = () => {
    return fetch("/profile")
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  };


  useEffect(() => {
    getUser();
  }, []);
if (props[0]) {

    return (
      <div>
        <p>{props[0].name}</p>
        <p>{props[0].manufacturer}</p>
        <h3> Specs</h3>
        <p>Speed: {props[0].speed}</p>
        <p>Stability: {props[0].stability}</p>
        <p>Turn: {props[0].turn}</p>
        <p>Fade: {props[0].fade}</p>
        <p>Glide: {props[0].glide}</p>
        <Button onClick={handleAdd}>Bag it</Button>
      </div>
    );
}
else {
    <div></div>
}
}


export default DiscDisplay