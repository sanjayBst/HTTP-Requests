import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    setInput("");
    setText('')
    setDate('')

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Description</label>
        <textarea
          rows="5"
          id="opening-text"
          ref={openingTextRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          ref={releaseDateRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
