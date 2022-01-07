import CalcActionTypes from "./calc.types";

export const setCurrentSolution = (result) => ({
  type: CalcActionTypes.SET_CURRENT_SOLUTION,
  payload: result,
});