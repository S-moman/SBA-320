import { useState, useEffect } from "react";

export default function Books() {
  const [episode, setEpisode] = useState([]);
  
  useEffect(() => {
    const fetchEpisode = async () => {
      const results = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/books"
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