import CartActionTypes from "./calc.types";

const INITIAL_STATE = {
  currentSolution: null,
};

const calcReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.HANDLE_CLICK:
      return {
        ...state,
        currentSolution: action.payload,
      };

    case CartActionTypes.ADD:
      return {
        ...state,
        currentSolution: action.payload,
      };

    case CartActionTypes.SUBSTRACT:
      return {
        ...state,
        currentSolution: action.payload,
      };

    case CartActionTypes.MULTIPLY:
      return {
        ...state,
        currentSolution: action.payload,
      };

    case CartActionTypes.DIVIDE:
      return {
        ...state,
        currentSolution: action.payload,
      };

    case CartActionTypes.CLEAR:
      return {
        ...state,
        currentSolution: "clear",
      };

    case CartActionTypes.EQUALS:
      return {
        ...state,
        currentSolution: action.payload,
      };

    default:
      return state;
  }
};

export default calcReducer;
