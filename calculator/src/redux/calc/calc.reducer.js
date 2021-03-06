import CalcActionTypes from "./calc.types";

const INITIAL_STATE = {
  data: "",
};

const calcReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CalcActionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default calcReducer;
