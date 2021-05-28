import { CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes.js';

const reducer = (companys = [],action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return companys.filter((company)=> company._id !== action.payload);
        case CREATE:
            return [...companys, action.payload];
        case UPDATE:
            return companys.map((company)=> company._id === action.payload._id ? action.payload : company);
        default:
            return companys;
    }
}; 

export default reducer;