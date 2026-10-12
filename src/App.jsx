import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component render hua", counter);
  });

  const addValue = () => {
    setCounter(counter + 1);
    console.log("Counter value after adding:", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("Counter value after removing:", counter);
    if (counter <= 0) {
      setCounter(0);
    }
  };

  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>

      <div className="card-grid">
        <Card name="Usama Shabbir" Role="Software Engineer" />
        <Card name="John Doe" Role="Web Developer" />
        <Card name="Jane Smith" Role="Graphic Designer" />
        <Card name="Jane Smith" Role="Digital Marketing" />
      </div>


    </>
  );
}

export default App;