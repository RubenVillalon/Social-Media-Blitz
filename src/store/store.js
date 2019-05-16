import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// importing the reducer
import rootReducers from "./reducers";

//To connect the Redux (dev tools):
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // here other store enhancers if any
);

// here we  create the store with the enhancers:
const store = createStore(rootReducers, enhancer);

export default store;
