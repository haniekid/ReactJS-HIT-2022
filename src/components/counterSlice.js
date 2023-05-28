// Action types
const INCREMENT = "increment";
const DECREMENT = "decrement";

const initialState = {
  count: 0,
};

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    // add new case for decrement
    default:
      return state;
  }
}

export default counterReducer;
