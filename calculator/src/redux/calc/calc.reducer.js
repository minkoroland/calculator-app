import CalcActionTypes from "./calc.types";
//import {setCurrentSolution} from "../..App";


const INITIAL_STATE = {
  currentSolution: "",
};

/*
const addNumberToState = (INITIAL_STATE.currentSolution) => {
  type: CalcActionTypes.HANDLE_CLICK,
  payload: result;
};
*/

const calcReducer = (state = INITIAL_STATE, action /*, addNumberToState*/) => {
  switch (action.type) {
    case CalcActionTypes.SET_CURRENT_SOLUTION:
      return {
        ...state,
        // utility fgv -> megkapja az értéket
        // az értéket hozzáfűzöm a currentSolt stringhez
        currentSolution: ,
        //currentSolution: setCurrentSolution(state.currentSolution, action.payload),

      };

    default:
      return state;
  }
};

export default calcReducer;
