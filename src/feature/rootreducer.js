import { combineReducers } from "redux";
import recipeReducer from "../feature/BrewerySlice";

export const rootReducer = combineReducers({
  recipe: recipeReducer,
});
