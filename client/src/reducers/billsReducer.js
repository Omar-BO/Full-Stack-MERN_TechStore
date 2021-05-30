import { CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes.js';

const Breducer = (bills = [],action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return bills.filter((bill)=> bill._id !== action.payload);
        case CREATE:
            return [...bills, action.payload];
        case UPDATE:
            return bills.map((bill)=> bill._id === action.payload._id ? action.payload : bill);
        default:
            return bills;
    }
}; 

export default Breducer;