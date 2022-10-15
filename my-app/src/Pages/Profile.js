

import  React from 'react';
import { useState, useEffect } from 'react'
import BackpackIcon from '@mui/icons-material/Backpack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SimpleAccordion() {
  const [ name, setName] = useState("")
  const [ search, setSearch] = useState("")




  const getUser = ( ) => {
  return fetch("/profile").then((res) => res.json()).then((data) => setName(data.name));
}



const handleSubmit = async (event) => {
  console.log(search)
  event.preventDefault();
  try {
    let response = await fetch("/search" , {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: search,
      }),
    });
    console.log(response)
    const resJson = await response.json()
    console.log(resJson)
    if(response.status === 200) {
      setSearch("")
      console.log("respoonse successful!")
    } 
    else {
      console.log("error")
    }
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=> {
  getUser();
}, []);
  return (
    <div className='parent'>
      <div className='child'>
        <h1>Add discs to your bag</h1>
        <form onSubmit={handleSubmit} className = "section-form">
        <TextField value={search} onChange={(e) => setSearch(e.target.value)} id="outlined-basic" label="Search for disc..." variant="outlined" />
        <Button type='submit' variant="contained">Search</Button>
        </form>
      </div>
      <div className='child'>
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