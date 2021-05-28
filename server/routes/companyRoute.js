import express from 'express';

import { getCompanys,addCompany,updateCompany } from '../controllers/companyController.js';

const router = express.Router();

router.get('/', getCompanys);
router.post('/', addCompany);
router.patch('/:id',updateCompany);



export default router;