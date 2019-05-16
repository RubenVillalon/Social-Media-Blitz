import { combineReducers } from "redux";
import authorizationReducer from "./authorizationReducer";
import feedReducer from "./feedReducer";
import userReducer from "./userReducer";
import userDetailsReducer from "./userDetailsReducer";
import myProfileReducer from "./myProfileReducer"

const rootReducer = combineReducers({
  authorizationReducer,
  feedReducer,
  userReducer,
  userDetailsReducer,
  myProfileReducer
});

export default rootReducer;
