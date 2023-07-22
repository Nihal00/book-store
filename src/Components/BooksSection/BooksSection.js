import React from "react";
import "./BooksSection.css";

const BooksSection = ({ id, title, img, setIfChecked }) => {
  return (
    <div className="book" onClick={() => setIfChecked(id)}>
      <img key={id} src={img} alt={title} />
    </div>
  );
};

export default BooksSection;
