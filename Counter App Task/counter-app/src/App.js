import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  //counter state
  const [counter, setCounter] = useState(0);
  
  //Ref for increase button 
  const increaseButton = useRef(null);

  //Effect hook to update the document title when counter is changed
  useEffect(() => {
    document.title = counter;
    
  }, [counter]);

  return (
    <div className="App">
      <p>{counter}</p>
      <div className="buttons"> 

        {/* update counter when button is clicked by calling setCounter */}
        <button ref = {increaseButton} onClick={() => {
          setCounter(counter + 1);
        }}>Increase Counter</button>

  <button onClick={() => {
          setCounter(counter - 1);
        }}>Decrease Counter</button>
      </div>

    </div>
  );
}

export default App;
