export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: "addTodo",
      payload: todo,
    });
  };
};

export const removeTodo = (todo) => ({
  type: "removeTodo",
  payload: todo,
});

export const changeCompleted = (todo) => (dispatch) => {
  dispatch({
    type: "changeCompleted",
    payload: todo,
  });
};

export const clearCompleted = () => ({
  type: "clearCompleted",
});

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: "updateLoading", payload: true });
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=50")
        .then((stream) => stream.json())
        .then((response) => {
          dispatch({ type: "addfetchedTodos", payload: response });
          dispatch({ type: "updateLoading", payload: false });
        });
    }, 2000);
  };
};

export const showMore = () => ({
  type: "addMore",
});
