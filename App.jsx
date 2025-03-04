import React from 'react';
import BookCard from "./components/BookCard";
import './App.css';

const books = [
  {
    title: "Can't hurt me",
    author: "David Goggins",
    year: 2018,
    cover: "https://m.media-amazon.com/images/I/81gTRv2HXrL.jpg",
  },
  {
    title: "Rich,poor dad",
    author: "Robert",
    year: 1997,
    cover: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    title: "НЕ тупи",
    author: "Джин Синсеро",
    year: 2020,
    cover: "https://www.litres.ru/pub/c/cover/50803326.jpg",
  },
];

const App = () => {
  return (
    <div className="app">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
};

export default App;
