import axios from 'axios';

const url = 'http://localhost:5000/TechStore';

export const fetchCompanys = () => axios.get(url);
export const addCompany  = (newCompany) => axios.post(url, newCompany);
export const updateCompany = (id, updatedCompany) => axios.patch(`${url}/${id}`,updatedCompany);
export const deleteCompany = (id) => axios.delete(`${url}/${id}`);