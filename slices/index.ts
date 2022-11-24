import { combineReducers } from "redux";
import token from "./auth";

const rootReducer = combineReducers({
  token,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
