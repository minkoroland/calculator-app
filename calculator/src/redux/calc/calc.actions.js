import CalcActionTypes from "./calc.types";

export const setData = result => ({
  type: CalcActionTypes.SET_DATA,
  payload: result,
});
