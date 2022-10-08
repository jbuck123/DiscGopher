
import React, {useEffect, useState} from 'react'




export default function Profile() {

    const [nameData, setNameData] = useState([]);
    const [discData, setDiscData] = useState([])
  


        const grabData = () => {
            fetch("/DiscGophers")
              .then((res) => res.json())
              .then((data) => {
                setNameData(data[0].name);
                setDiscData(data[0].discs)
                console.log(data[0].discs);
              });
          };
    
        useEffect(grabData, [])
    
    return(
        <div className='section-bg-armyGreen'> 
            <h1 className='section-title'>
                {nameData}
            </h1>
            <div className='section-content'>
                {discData.map((disc, index) => {
                    return (
                        <div>{disc.name} </div>
                    )
                })}
            </div>
        </div>
    )
  } 