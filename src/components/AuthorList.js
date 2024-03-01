import React from 'react';

const AuthorList = ({ authors }) => {
  return (
    <div>
      <h2>Author List</h2>
      <ul>
        {authors.map(author => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
