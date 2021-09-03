import { useSelector, useDispatch } from "react-redux";
import React, { useRef } from "react";
import { addTodo, fetchItems } from "../state/action-creators";

const TodosForm = () => {
  const todos = useSelector((store) => store.todos);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const submitInputValues = (evt) => {
    evt.preventDefault();
    let match = todos.todos.filter(
      (obj) => obj.title === inputRef.current.value
    );
    if (!match.length && inputRef.current.value.trim().length) {
      dispatch(addTodo(inputRef.current.value));
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Todos</h1>
      <form className="form" onSubmit={submitInputValues}>
        <input
          className="input"
          type="text"
          placeholder="Enter Todo"
          maxLength="30"
          ref={inputRef}
        />
        <button type="submit" className="btn">
          Add
        </button>
        <button
          ref={btnRef}
          className="btn"
          onClick={() => {
            dispatch(fetchItems());
            btnRef.current.disabled = true;
          }}
        >
          Add 10 Random ToDos
        </button>
      </form>
    </>
  );
};

export default TodosForm;
