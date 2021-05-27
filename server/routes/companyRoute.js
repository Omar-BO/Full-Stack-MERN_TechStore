import express from 'express';

import { getCompanys,addCompany } from '../controllers/companyController.js';

const router = express.Router();

router.get('/', getCompanys);
router.post('/', addCompany);



export default router;