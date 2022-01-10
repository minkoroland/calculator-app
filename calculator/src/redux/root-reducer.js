import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import calcReducer from "./calc/calc.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["calc"],
};

const rootReducer = combineReducers({
  calc: calcReducer,
});

export default persistReducer(persistConfig, rootReducer);
