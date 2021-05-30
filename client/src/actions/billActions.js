import * as api from '../api'
import { CREATE, UPDATE, DELETE, FETCH_ALL} from '../constants/actionTypes.js';

export const getBills = () => async(dispatch) => {
    try {
        const { data } = await api.fetchBills();
        dispatch({ type: FETCH_ALL, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const addBill = (bill) => async(dispatch) => {
    try {
        const { data } = await api.addBill(bill);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateBill = (id, bill) => async (dispatch) => {
    try {
        const { data } = await api.updateBill(id, bill);
        dispatch( {type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteBill = (id) => async (dispatch) => {
    try {
        await api.deleteBill(id);
        dispatch( {type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}