import { CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes.js';

const Ireducer = (items = [],action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return items.filter((item)=> item._id !== action.payload);
        case CREATE:
            return [...items, action.payload];
        case UPDATE:
            return items.map((item)=> item._id === action.payload._id ? action.payload : item);
        default:
            return items;
    }
}; 

export default Ireducer;