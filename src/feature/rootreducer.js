import { combineReducers } from "redux";
import breweryReducer from "../feature/BrewerySlice";

export const rootReducer = combineReducers({
  brewery: breweryReducer,
});
