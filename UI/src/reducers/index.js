import { combineReducers } from 'redux';
import family from './familyReducer';

const rootReducer = (state, action) => combineReducers({
    family
})(state, action);

export default rootReducer;
