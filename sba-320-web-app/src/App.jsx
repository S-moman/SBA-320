import { useState, useEffect } from "react";
import "./App.css";
import { use } from "react";
import { Children } from "react";
import Characters from "./components/Rick&Morty";
import NavBar from "./components/NavBar";
import Harry from './components/Characters'
import Houses from "./components/Houses";

function Card() {
  return (
    <div className="card">
      <Harry />
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Card />
      <Houses/>
    </>
  );
}

export default App;
