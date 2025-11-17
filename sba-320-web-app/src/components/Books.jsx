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


  function flipCardEnter() {
    setFlipped(true)
  }

  function flipCardLeave() {
    setFlipped(false)
  }

  return (
    <div className="book-section">
      {books.map((book) => (
        <div id="book-card" key={book.index} className={`${isFlipped ? 'flipped' : ''}`} >
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped }>
            <div className="front" onMouseEnter={flipCardEnter} >
              <img src={book.cover} alt={book.title} />
            </div>
            <div className="book-back" onMouseLeave={flipCardLeave}>
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


