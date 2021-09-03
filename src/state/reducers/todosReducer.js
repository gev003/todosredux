const initialState = {
  todos: [
    {
      id: Math.random(),
      title: "Learn Redux",
      completed: false,
    },
    {
      id: Math.random(),
      title: "Learn React",
      completed: false,
    },
    {
      id: Math.random(),
      title: "Learn Scss",
      completed: false,
    },
  ],
  todosBase: [],
  count: 2,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), title: action.payload, completed: false },
        ],
        todosBase: [...state.todosBase],
        count: state.count,
      };
    case "removeTodo":
      const filteredState = state.todos.filter(
        (obj) => obj.id !== action.payload.id
      );
      return {
        todos: [...filteredState],
        todosBase: [...state.todosBase],
        count: state.count,
      };
    case "changeCompleted":
      const findMatchedObj = state.todos.find(
        (obj) => obj.id === action.payload.id
      );
      findMatchedObj.completed = !findMatchedObj.completed;
      return {
        todos: [...state.todos],
        todosBase: [...state.todosBase],
        count: state.count,
      };
    case "addfetchedTodos":
      let splicedTodosList = action.payload.slice(0, 10);
      return {
        todos: [...state.todos, ...splicedTodosList],
        todosBase: action.payload,
        count: state.count,
      };
    case "addMore":
      let addMoreTodos = state.todosBase.slice(0, 10 * state.count);
      return {
        todos: [...addMoreTodos],
        todosBase: state.todosBase,
        count: state.count + 1,
      };
    case "clearCompleted":
      let clearCompletedTodos = state.todos.filter((obj) => !obj.completed);
      return {
        todos: [...clearCompletedTodos],
        todosBase: state.todosBase,
        count: state.count,
      };
    default:
      return state;
  }
};

export default todosReducer;
