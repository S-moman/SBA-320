import { useState, useEffect } from "react";

export default function Characters() {
  const [data, setData] = useState([]);

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

  return (
    <>
      {data.map((item) => (
        <div className="character-card" key={item.index}>
          {<img id="cImage" src={item.image} alt={item.fullName} />}
          <div>
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
            <button>Like</button>
          </div>
        </div>
      ))}
    </>
    
  );
}
