import { combineReducers} from 'redux';
import companysRed from './companysReducer.js';
import billsRed from './billsReducer.js';

export default combineReducers({ companysRed,billsRed });