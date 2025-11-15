import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [isFlipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchEpisode = async () => {
      const results = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/books"
      );
      const books = await results.json();
      setBooks(books);
      //   console.log(books)
    };
    fetchEpisode();
  }, []);

  function flipCard() {
    setFlipped(!isFlipped);
  }

  return (
    <div className="book-section">
      {books.map((book) => (
        <div className="card">
          <ReactCardFlip flipDirection="vertical" isFlipped={isFlipped}>
            <div className="front" onClick={flipCard}>
              <img src={book.cover} alt={book.title} />
            </div>
            <div className="back" onClick={flipCard}>
              <div id="bInfo">Title: {book.title}</div>
              <div id="bInfo">Description: {book.description}</div>
              <div id="bInfo">Pages: {book.pages}</div>
              <div id="bInfo">Release Date: {book.releaseDate}</div>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
  );
}


