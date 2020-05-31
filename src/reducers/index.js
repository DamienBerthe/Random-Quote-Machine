import randomReducer from './randomIndex';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    randomIndex : randomReducer
})

export default allReducers;