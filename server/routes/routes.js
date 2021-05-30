import express from 'express';

import { getCompanys,addCompany,updateCompany, deleteCompany } from '../controllers/companyController.js';
import { getBills,addBill,updateBill, deleteBill } from '../controllers/billController.js';
const router = express.Router();

router.get('/company', getCompanys);
router.post('/company', addCompany);
router.patch('/company/:id',updateCompany);
router.delete('/company/:id',deleteCompany);

router.get('/bill', getBills);
router.post('/bill', addBill);
router.patch('/bill/:id',updateBill);
router.delete('/bill/:id',deleteBill);



export default router;