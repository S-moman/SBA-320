import { useState, useEffect } from "react";

export default function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetch(
          "https://rickandmortyapi.com/api/character?page=1"
        );
        const data = await results.json();
        setData(data.results);
        console.log(data.results);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <div className="character-card" key={item.id}>
          {<img id="cImage" src={item.image} alt={item.name} />}
          <div>
            <h1 id="cInfo">{item.name}</h1>
            <div id="cInfo">
              <b>Species:</b> {item.species}
            </div>
            <div id="cInfo">
              <b>Gender:</b> {item.gender}
            </div>
            <div id="cInfo">
              <b>Status:</b> {item.status}
            </div>
            <div id="cInfo">
              <b>Location:</b> {item.location.name}
            </div>
            <div id="cInfo">
              <b>Origin:</b> {item.origin.name}
            </div>
          </div>
        </div>
      ))}
    </>
    
  );
}
