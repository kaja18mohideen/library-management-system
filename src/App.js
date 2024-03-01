import React, { useState } from 'react';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';

const App = () => {

  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Add/Edit Book</h2>
        <BookForm onSubmit={addBook} />
      </div>
      <div>
        <h2>Add/Edit Author</h2>
        <AuthorForm onSubmit={addAuthor} />
      </div>
      <div>
        <BookList books={books} />
      </div>
      <div>
        <AuthorList authors={authors} />
      </div>
    </div>
  );
};

export default App;
