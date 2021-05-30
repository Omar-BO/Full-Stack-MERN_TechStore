import { combineReducers} from 'redux';
import companysRed from './companysReducer.js';
import billsRed from './billsReducer.js';
import contacts from './contactsReducer.js';
import items from './itemsReducer.js';

export default combineReducers({ companysRed,billsRed,contacts,items });