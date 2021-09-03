import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../state/action-creators";

const TodoFormBottom = () => {
  const store = useSelector((state) => state.todos.todos);

  let filterCheckedTodos = store.filter((obj) => obj.completed);
  let dispatch = useDispatch();

  return (
    <>
      <span>
        {filterCheckedTodos.length} / {store.length}
      </span>
      <button
        className="btn"
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear Completed
      </button>
    </>
  );
};

export default TodoFormBottom;
