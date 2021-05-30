import axios from 'axios';

// BackEnd URL:
const url = 'http://localhost:5000/TechStore';

// Company Page'API
export const fetchCompanys = () => axios.get(`${url}/company`);
export const addCompany  = (newCompany) => axios.post(`${url}/company`, newCompany);
export const updateCompany = (id, updatedCompany) => axios.patch(`${url}/company/${id}`,updatedCompany);
export const deleteCompany = (id) => axios.delete(`${url}/company/${id}`);

// Bill Page'API
export const fetchBills = () => axios.get(`${url}/bill`);
export const addBill  = (newBill) => axios.post(`${url}/bill`, newBill);
export const updateBill = (id, updatedBill) => axios.patch(`${url}/bill/${id}`,updatedBill);
export const deleteBill = (id) => axios.delete(`${url}/bill/${id}`);

// Contact Page'API
export const fetchContacts = () => axios.get(`${url}/contact`);
export const createContact = (newContact) => axios.post(`${url}/contact`, newContact);
export const updateContact = (id, updateContact) => axios.patch(`${url}/contact/${id}`, updateContact);
export const deleteContact = (id) => axios.delete(`${url}/contact/${id}`, deleteContact);

// Item Page'API
export const fetchItems = () => axios.get(`${url}/item`);
export const createItem = (newItem) => axios.post(`${url}/item`, newItem);
export const updateItem = (id, updateItem) => axios.patch(`${url}/item/${id}`, updateItem);
export const deleteItem = (id) => axios.delete(`${url}/item/${id}`, deleteItem);