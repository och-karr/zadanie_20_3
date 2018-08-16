import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';

const reducers = combineReducers({
    countries: countriesReducer
});

export default reducers;