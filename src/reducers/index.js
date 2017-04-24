import {combineReducers} from 'redux';
import WeatherReducer from './weatherReducer.js';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
