import { useState, useEffect } from "react";
import "./App.css";
import { use } from "react";
import { Children } from "react";
import Characters from "./components/Characters";

function Card() {
  return(
    <div className="card">
      <Characters />
    </div>
  )
}

function App() {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
