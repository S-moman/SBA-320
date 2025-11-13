import { useState, useEffect } from "react";

export default function Episodes() {
  const [episode, setEpisode] = useState([]);
  
  useEffect(() => {
    const fetchEpisode = async () => {
      const results = await fetch(
        "https://rickandmortyapi.com/api/episode?page=1"
      );
      const ep = await results.json();
      setEpisode(ep.results);
      //   console.log(ep.results)
    };
    fetchEpisode();
  }, []);

  return (
    <div>
      {episode.map((ep) => (
        <div key={ep.id}>
          <p>Name: {ep.name}</p>
        </div>
      ))}
    </div>
  );
}