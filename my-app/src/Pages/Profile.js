

import  React from 'react';
import { useState, useEffect } from 'react'

export default function SimpleAccordion() {
  const [ name, setName] = useState("")




  const getUser = ( ) => {
  return fetch("/profile").then((res) => res.json()).then((data) => setName(data.name));
}

const searchDisc = () => {

}
useEffect(()=> {
  getUser();
}, []);
  return (
    <div className=' section-bg-armyGreen'>
      <h1></h1>
      <h1> {name}'s profile page</h1>
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