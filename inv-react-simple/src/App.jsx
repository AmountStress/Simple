import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Aumentar</button>
        <button onClick={() => setCount((count) => count - 1)}>Disminuir</button>
        <button onClick={() => setCount((count) => 0)}>Resetear</button>
      </div>
    </div>  
  );
}

export default App;
