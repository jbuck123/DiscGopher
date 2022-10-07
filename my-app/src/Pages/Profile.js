
import React, {useState} from 'react'




export default function Profile() {

    const [nameData, setNameData] = useState([]);
  


        const grabData = () => {
            fetch("/DiscGophers")
              .then((res) => res.json())
              .then((data) => {
                setNameData(data[0].name);
                console.log(data[0].name);
              });
          };
    
        grabData();
    
    return(
        <div> 
            <h1>
                {nameData}
            </h1>
        </div>
    )
  } 