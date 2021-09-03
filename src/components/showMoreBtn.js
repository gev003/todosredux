import { useSelector, useDispatch } from "react-redux";
import { showMore } from "../state/action-creators";

const ShowMoreBtn = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <button
      className="btn"
      disabled={
        todos.todos.length === todos.todosBase.length ||
        todos.todosBase.length === 0
      }
      onClick={() => {
        dispatch(showMore());
      }}
    >
      Add More
    </button>
  );
};

export default ShowMoreBtn;
