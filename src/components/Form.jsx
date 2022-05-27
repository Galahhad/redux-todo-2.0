import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const array = useSelector((state) => state.todoArray);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim().length === 0 || array.some((item) => item.text === text)) {
      setText("");
    } else {
      dispatch({ type: "add_todo", payload: text });
      setText("");
    }
  };

  return (
    <form className="form" onSubmit={handleAdd}>
      <input
        placeholder="Введите текст"
        className="input"
        value={text}
        onChange={handleText}
      />
      <span className="border"></span>
      <button type="submit" className="button" disabled={text.trim().length === 0}>
        Add
      </button>
    </form>
  );
};

export default Form;
