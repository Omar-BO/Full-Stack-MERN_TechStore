import companyModel from '../models/companyModel.js';

export const getCompanys = async (req, res) => {
    try {
        const companyModels = await companyModel.find();
        res.status(200).json(companyModels);
    } catch (error) {
        req.status(404).json({message: error.message});
    }
};

export const addCompany = async (req, res) => {
    const company = req.body;
    const newCompany =  new companyModel(company);
    try {
        await newCompany.save();

        res.status(201).json(newCompany);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};