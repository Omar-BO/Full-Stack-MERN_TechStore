import express from 'express';

import { getCompanys,addCompany,updateCompany, deleteCompany } from '../controllers/companyController.js';

const router = express.Router();

router.get('/', getCompanys);
router.post('/', addCompany);
router.patch('/:id',updateCompany);
router.delete('/:id',deleteCompany);



export default router;