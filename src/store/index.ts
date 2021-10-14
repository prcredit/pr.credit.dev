import {
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import userReducer from '../ducks/info';
import { ENV } from '../config/api-config';


const rootReducer = combineReducers({
  data: userReducer,
});
const middleware = ENV === 'PROD'
  ? [thunk]
  : [thunk, logger];

export type AppState = ReturnType<typeof rootReducer>;


export default createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
  ),
);