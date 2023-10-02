import React from "react";
import { useState } from "react";

const Tabuada = (props) => {
  return (
    <>
      <h2>Tabuada de {props.inputNumero}</h2>
      <p>
        {props.inputNumero} X 1 = {props.inputNumero * 1}
      </p>
      <p>
        {props.inputNumero} X 2 = {props.inputNumero * 2}
      </p>
      <p>
        {props.inputNumero} X 3 = {props.inputNumero * 3}
      </p>
      <p>
        {props.inputNumero} X 4 = {props.inputNumero * 4}
      </p>
      <p>
        {props.inputNumero} X 5 = {props.inputNumero * 5}
      </p>
      <p>
        {props.inputNumero} X 6 ={props.inputNumero * 6}
      </p>
      <p>
        {props.inputNumero} X 7 = {props.inputNumero * 7}
      </p>
      <p>
        {props.inputNumero} X 8 = {props.inputNumero * 8}
      </p>
      <p>
        {props.inputNumero} X 9 = {props.inputNumero * 9}
      </p>
      <p>
        {props.inputNumero} X 10 = {props.inputNumero * 10}
      </p>
    </>
  );
};

export default Tabuada;
