import { useState } from "react";
import Tabuada from "./components/Tabuada";
import Numero from "./components/Numero";

import "./App.css";

function App() {
  const [inputNumero, setInputNumero] = useState("");
  return (
    <>
      <h1>Tabuada</h1>
      <Numero onEnter={setInputNumero} />
      <Tabuada inputNumero={inputNumero} />
    </>
  );
}

export default App;
