import React, { useState, useEffect } from "react";
import API from "../api";

function Books() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const fetchBooks = async () => {
    const { data } = await API.get(
      `/books?keyword=${keyword}&page=${page}`
    );
    setBooks(data.books);
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const addBook = async () => {
    await API.post("/books", { title, author });
    fetchBooks();
  };

  return (
    <div>
      <h2>Books</h2>

      <input
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={fetchBooks}>Search</button>

      <br /><br />

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map((b) => (
          <li key={b._id}>{b.title} - {b.author}</li>
        ))}
      </ul>

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Books;
