import * as api from '../api'

export const getCompanys = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCompanys();
        dispatch({ type: 'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const addCompany = (company) => async(dispatch) => {
    try {
        const { data } = await api.addCompany(company);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateCompany = (id, company) => async (dispatch) => {
    try {
        const { data } = await api.updateCompany(id, company);
        dispatch( {type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCompany = (id) => async (dispatch) => {
    try {
        await api.deleteCompany(id);
        dispatch( {type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}