import express from 'express';

import { getCompanys,addCompany,updateCompany, deleteCompany } from '../controllers/companyController.js';
import { getBills,addBill,updateBill, deleteBill } from '../controllers/billController.js';
import { getItems,createItem,updateItem, deleteItem } from '../controllers/itemController.js';
import { getContacts,createContact,updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

// Companyies Route
router.get('/company', getCompanys);
router.post('/company', addCompany);
router.patch('/company/:id',updateCompany);
router.delete('/company/:id',deleteCompany);


// Bills Route
router.get('/bill', getBills);
router.post('/bill', addBill);
router.patch('/bill/:id',updateBill);
router.delete('/bill/:id',deleteBill);


// Items Route
router.get('/item', getItems);
router.post('/item', createItem);
router.patch('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

// Contacts Route
router.get('/contact', getContacts);
router.post('/contact', createContact);
router.patch('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);

export default router;