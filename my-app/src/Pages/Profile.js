import React from "react";
import { useState, useEffect } from "react";
import BackpackIcon from "@mui/icons-material/Backpack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DiscDisplay from "../components/DiscDisplay";

export default function Profile() {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");


  const [error, setError] = useState(false);


  const [message, setMessage] = useState("");

  const getUser = () => {
    return fetch("/profile")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  };



  const handleSubmit = async (event) => {


    event.preventDefault();
    try {
      let response = await fetch("/search", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: search,
        }),
      });
      console.log(response)
      const disc = await response.json();
      console.log(disc);
      if (disc.length == 0) {
        setError(true)
        console.log("error");
        setSearchResults(null);
      } 
      
      else {
         setSearch("");
         console.log("respoonse successful!");
         setSearchResults(disc);
          console.log(searchResults)
         setError(false)
       
      }
    } catch (error) {
      console.log("fetch error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
const errorMessage = () => {
  return(
    <div className="error" style={{display: error ? "" : "none"} }>
      <h1>Please enter valid disc name</h1>
    </div>
  )
}




  return (
    <div className="parent">
      <div className="messages">
        {errorMessage()}
      </div>
      <div className="child">
        <h1>Add discs to your bag</h1>
        <form onSubmit={handleSubmit} className="section-form">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="outlined-basic"
            label="Search for disc..."
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </form>
        <DiscDisplay {...searchResults} />
      </div>
      <div className="child">
        <h1>{name} bag </h1>
        <BackpackIcon />
      </div>
    </div>
  );
}

// import React, {useEffect, useState} from 'react'

// export default function Profile() {
//   const [ name, setName] = useState("")

// const getUser = ( ) => {
//   return fetch("/profile").then((res) => res.json()).then((data) => setName(data.name));

// }
// useEffect(() => {
//   getUser();
// }, [])
//   return

//   }
