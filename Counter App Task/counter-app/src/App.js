import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  //counter state
  const [counter, setCounter] = useState(0);
  
  //Ref for increase and decrease buttons, used to grab the buttons and update their background colors when button is clicked   
  const increaseButton = useRef(null);
  const decreaseButton = useRef(null);

  //Effect hook to update the document title when counter is changed
  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <div className="App">
      <p>{counter}</p>
      <div className="buttons"> 

        {/* update counter when button is clicked by calling setCounter, and change the color of the buttons */}
        <button ref = {increaseButton} onClick={() => {
          setCounter(counter + 1);
          increaseButton.current.style.backgroundColor = "red";
          decreaseButton.current.style.backgroundColor = "lightblue";
        }}>Increase Counter</button>

  <button ref = {decreaseButton} onClick={() => {
          setCounter(counter - 1);
          decreaseButton.current.style.backgroundColor = "red";
          increaseButton.current.style.backgroundColor = "lightblue";
        }}>Decrease Counter</button>
      </div>

    </div>
  );
}

export default App;
