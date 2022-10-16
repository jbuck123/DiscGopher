import Button from "@mui/material/Button";



function DiscDisplay(props) {
  console.log(props);

  const handleAdd = async (event) => { 
      event.preventDefault();
  }

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
        <Button onSubmit={handleAdd}>Bag it</Button>
      </div>
    );
}
else {
    <div></div>
}
}


export default DiscDisplay