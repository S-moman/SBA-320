import { useState, useEffect } from "react";
import "./App.css";
import { use } from "react";
import { Children } from "react";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Houses from "./components/Houses";
import Books from "./components/Books";
import ReactCardFlip from "react-card-flip";

function Card() {
  return (
    <div className="card">
      <Characters />
    </div>
  );
}

function App() {
  return <Books />;
}

export default App;
