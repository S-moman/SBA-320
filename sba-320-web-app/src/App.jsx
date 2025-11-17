import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Houses from "./components/Houses";
import Books from "./components/Books";
import ReactCardFlip from "react-card-flip";
import { Route, Routes } from "react-router";
import Spells from "./components/Spells";
import HomePage from "./components/HomePage";

function App() {
  const [isFlipped, setFlipped] = useState(false);

  function flipCard() {
    setFlipped(!isFlipped);
  }


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Characters setFlipped={isFlipped} onClick={flipCard}/>} />
        <Route path="/houses" element={<Houses setFlipped={isFlipped} onClick={flipCard} />} />
        <Route path="/books" element={<Books setFlipped={isFlipped} onClick={flipCard}/>} />
        <Route path="/spells" element={<Spells setFlipped={isFlipped} onClick={flipCard}/>} />
      </Routes>
    </>
  );
}

export default App;
