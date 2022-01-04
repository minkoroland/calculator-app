import CalcActionTypes from "./calc.reducer";

export const handleClick = (item) => ({
  type: CalcActionTypes.HANDLE_CLICK,
  payload: item,
});

export const add = (item) => ({
  type: CalcActionTypes.ADD,
  payload: item,
});

export const substract = (item) => ({
  type: CalcActionTypes.SUBSTRACT,
  payload: item,
});

export const multiply = (item) => ({
  type: CalcActionTypes.MULTIPLY,
  payload: item,
});

export const divide = (item) => ({
  type: CalcActionTypes.DIVIDE,
  payload: item,
});

export const equals = (item) => ({
  type: CalcActionTypes.EQUALS,
  payload: item,
});

export const clear = () => ({
  type: CalcActionTypes.CLEAR,
});
