import { useState, useEffect } from "react";

export default function Location() {
  const [place, setPlace] = useState([]);
  
  useEffect(() => {
    const fetchLocation = async () => {
      const results = await fetch(
        "https://rickandmortyapi.com/api/location?page=1"
      );
      const lo = await results.json();
      setPlace(lo.results);
      //   console.log(lo.results)
    };
    fetchLocation();
  }, []);

  return (
    <div>
      {place.map((lo) => (
        <div key={lo.id}>
          <p>Name: {lo.name}</p>
        </div>
      ))}
    </div>
  );
}
