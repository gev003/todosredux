import { useHistory } from "react-router-dom";

export const TodosItemList = (props) => {
  let history = useHistory();

  return (
    <div>
      <h1>{props.location.state.title}</h1>
      <button
        className="btn"
        onClick={() => {
          history.push("/");
        }}
      >
        Back To Home
      </button>
    </div>
  );
};
