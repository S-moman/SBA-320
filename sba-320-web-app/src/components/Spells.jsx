import { useState, useEffect, useContext } from "react";
import ReactCardFlip from "react-card-flip";

export default function Spells() {
  const [spells, setSpells] = useState([]);
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch(
          "https://potterapi-fedeperin.vercel.app/en/spells"
        );
        const spellData = await response.json();
        setSpells(spellData);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchSpells();
  }, []);
  function flipCard(index) {
    setFlipped(!isFlipped);
  }

  return (
    <div className="spell-section">
      {spells.map((spell) => (
        <div className="spell-card" key={spell.index}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="front" onClick={flipCard}>
              <h1>{spell.spell}</h1>
            </div>
            <div className="back" onClick={flipCard}>
              {spell.use}
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
}
