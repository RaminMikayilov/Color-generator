import { useState } from "react";
import ColorGenerator from "./components/Colorgenerator/ColorGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColorGenerator />
    </>
  );
}

export default App;
