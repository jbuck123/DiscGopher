import BackpackIcon from "@mui/icons-material/Backpack";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function DiscBag(props) {
  const [loading, setLoading] = useState(true);
  const [discBag, setDiscBag] = useState([ ]);

  const userID = props.user.user.id;
console.log(props)
console.log(discBag)

const getDiscs = async () => {
  try {
    const response = await fetch(`/users/${userID}`)
    const data = await response.json()
    console.log(data)
    
    setLoading(false)

    if(data.discBag)
    setDiscBag(data.discBag)
    

  } catch (error) {
    console.log(error)
  }
}
  getDiscs();


  if (loading) {
    return <div> ....loading bro</div>;
  }
  return (
    <div className="child">
      
      {discBag.map((discs, index) => (
        <div className="discs" key={discs._id}>
          {discs.manufacturer} :
          {discs.name}
        </div>
      ))}
    </div>
  );
}



export default DiscBag;
