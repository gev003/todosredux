const initialState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateLoading":
      return {
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
