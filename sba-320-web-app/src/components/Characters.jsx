import { useState, useEffect, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import HomePage from "./HomePage";

export default function Characters() {
  const [data, setData] = useState([]);
    const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetch(
          "https://potterapi-fedeperin.vercel.app/en/characters"
        );
        const data = await results.json();
        setData(data);
        // console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

   function flipCard(index) {
    setFlipped(!isFlipped);
  }


  return (
    <section className="character-section">
      {data.map((item) => (
        <div className="character-card" key={item.index}>
          <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
            <div className="front" onClick={() => flipCard(item.index)}>
              <img id="cImage" src={item.image} alt={item.fullName} />
              <h1 id="cInfo">{item.fullName}</h1>
            </div>
            <div className="back" onClick={() => flipCard(item.index)}>
              <h1 id="cInfo">{item.fullName}</h1>
              <div id="cInfo">
                <b>Nickname:</b> {item.nickname}
              </div>
              <div id="cInfo">
                <b>Birthdate:</b> {item.birthdate}
              </div>
              <div id="cInfo">
                <b>Hogwarts House:</b> {item.hogwartsHouse}
              </div>
              <div id="cInfo">
                <b>Interpreted By:</b> {item.interpretedBy}
              </div>
              <div id="cInfo">
                <b>Children:</b> {item.children}
              </div>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </section>
  );
}