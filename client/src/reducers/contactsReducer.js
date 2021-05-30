import { CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes.js';

const CCreducer = (contacts = [],action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return contacts.filter((contact)=> contact._id !== action.payload);
        case CREATE:
            return [...contacts, action.payload];
        case UPDATE:
            return contacts.map((contact)=> contact._id === action.payload._id ? action.payload : contact);
        default:
            return contacts;
    }
}; 

export default CCreducer;