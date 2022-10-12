
import React, {useEffect, useState} from 'react'
 




export default function Profile() {
  const [ name, setName] = useState("")

const getUser = ( ) => {
  return fetch("/profile").then((res) => res.json()).then((data) => setName(data.name));
 
}
useEffect(() => {
  getUser();
}, [])
  return (
    <div>
      <h1>
        {name}
      </h1>
    </div>
  )
    
  } 