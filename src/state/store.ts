import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ForecastReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  forecast: ForecastReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
