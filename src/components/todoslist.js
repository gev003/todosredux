import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { changeCompleted, removeTodo } from "../state/action-creators";
import { Link } from "react-router-dom";

const TodosList = () => {
  const todos = useSelector((store) => store.todos);

  const dispatch = useDispatch();

  return (
    <>
      {todos.todos.map((obj) => (
        <div key={obj.id} className="content">
          <input
            type="checkbox"
            checked={obj.completed}
            onChange={() => {
              dispatch(changeCompleted(obj));
            }}
          />
          <Link
            to={{
              pathname: `/${obj.title.toLowerCase().split(" ").join("-")}`,
              state: { title: obj.title },
            }}
          >
            <h3 className={obj.completed ? "mark" : ""}>{obj.title}</h3>
          </Link>
          <button
            onClick={() => {
              dispatch(removeTodo(obj));
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default TodosList;
