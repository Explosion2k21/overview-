import { combineReducers } from "redux";
import rating from "./ratingReducers.js";

const rootReducer = combineReducers({ rating });

export default rootReducer;
