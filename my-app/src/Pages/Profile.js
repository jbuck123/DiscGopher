
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
   <div className='section-bg-armyGreen' >
     <h2 className='section-title'>{name}</h2>
     <p className='section-content'> </p>
   </div>
  )
    
  } 