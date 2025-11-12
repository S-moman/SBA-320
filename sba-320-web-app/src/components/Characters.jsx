import { useState, useEffect } from "react";

export default function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch(
        "https://rickandmortyapi.com/api/character?page=20"
      );
      const data = await results.json();
      setData(data.results);
      console.log(data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
            <h1>Name: {item.name}</h1>
          {<img src={item.image} alt={item.name} />}
          <p>Species: {item.species}</p>
          <p>Gender: {item.gender}</p>
          <p>Status: {item.status}</p>
          <p>Location: {item.location.name}</p>
          <p>Location: {item.location.url}</p>
        </div>
      ))}
    </div>
  );
}
