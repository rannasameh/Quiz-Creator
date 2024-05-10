import { combineReducers } from "redux";
import quizzesReducer from "./quizzesReducer";

const rootReducer = combineReducers({
  quizzes: quizzesReducer,
});

export default rootReducer;
