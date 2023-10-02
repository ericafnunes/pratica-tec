import React from "react";
import { useState } from "react";

const Numero = (props) => {
  const [text, setText] = useState("");

  const keyUp = (e) => {
    if (e.keyCode === 13) {
      if (props.onEnter) {
        props.onEnter(text);
      }
      setText("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Digite o número"
        value={text}
        onKeyUp={keyUp}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
};

export default Numero;
