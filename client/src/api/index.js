import axios from 'axios';

const url = 'http://localhost:5000/TechStore';

export const fetchCompanys = () => axios.get(`${url}/company`);
export const addCompany  = (newCompany) => axios.post(`${url}/company`, newCompany);
export const updateCompany = (id, updatedCompany) => axios.patch(`${url}/company/${id}`,updatedCompany);
export const deleteCompany = (id) => axios.delete(`${url}/company/${id}`);

export const fetchBills = () => axios.get(`${url}/bill`);
export const addBill  = (newBill) => axios.post(`${url}/bill`, newBill);
export const updateBill = (id, updatedBill) => axios.patch(`${url}/bill/${id}`,updatedBill);
export const deleteBill = (id) => axios.delete(`${url}/bill/${id}`);
