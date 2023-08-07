// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
//   let items = ["NY", "SF", "Paris", "London"];

  const [clickedButton, setclickedButton] = useState(0);

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

  const handleClick = () => {
    console.log("clicked myguel");
	setclickedButton(1);
  };

  const handleClickButtonClose = () => {
    console.log("clicked close");
	setclickedButton(0);
  };

  const handleShowAlert = () => {
	
    return (
      <Alert onClick={handleClickButtonClose}>
        Alerte <strong>danger</strong>
      </Alert>
    );
  };

  return (
    <div>
      {/* <Message /> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
	{clickedButton === 1 && handleShowAlert()}
	
      <Button onClick={handleClick}>My beautiful button</Button>
    </div>
  );
}

export default App;
