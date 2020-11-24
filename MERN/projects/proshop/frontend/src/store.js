import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// The reducer will be an object of all the reducers in our application combined such that
// we can always send actions and each reducer will see the action and determine what reducer
//to fire off and change some state. This is important
const rootReducer = combineReducers({});

// the initial app state - can be empty or anything you want by default when app loads
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer, // takes in the root reducer which is the overarching state
  initialState, // takes in the initial state
  composeWithDevTools(applyMiddleware(...middleware))
  // also a third option which is middleware and in this case, this allows us to use
  // redux devtools and apply any middlewares to it (in this case thunk)
);

export default store;
