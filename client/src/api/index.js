import axios from 'axios';

const url = 'http://localhost:5000/TechStore';

export const fetchCompanys = () => axios.get(url);
export const addCompany  = (newCompany) => axios.post(url, newCompany);