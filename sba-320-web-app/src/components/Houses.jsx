import { useState, useEffect } from "react";

export default function Houses() {
  const [house, setHouse] = useState([]);
  
  useEffect(() => {
    const fetchLocation = async () => {
      const results = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/houses"
      );
      const house = await results.json();
      setHouse(house);
        // console.log(house)
    };
    fetchLocation();
  }, []);

  return (
    <div>
      {house.map((h) => (
        <div id="house-card" key={h.index}>
          <div id="hInfo"><b>Founder:</b> {h.founder}</div>
          <div id="hInfo"><b>Name:</b> {h.house} {h.emoji}</div>
          <div id="hInfo"><b>Colors:</b> {h.colors}</div>
        </div>
      ))}
    </div>
  );
}
