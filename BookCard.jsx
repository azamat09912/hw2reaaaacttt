import React from "react";
import "./BookCard.css";

const BookCard = ({ title, author, year, cover }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-cover" />
      <h2>{title}</h2>
      <p>Автор: {author}</p>
      <p>Шыққан жылы: {year}</p>
    </div>
  );
};

export default BookCard;