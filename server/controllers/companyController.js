import companyModel from '../models/companyModel.js';
import mongoose from 'mongoose';

export const getCompanys = async (req, res) => {
    try {
        const companyModels = await companyModel.find();
        res.status(200).json(companyModels);
    } catch (error) {
        req.status(404).json({message: error});
    }
};

export const addCompany = async (req, res) => {
    const company = req.body;
    const newCompany =  new companyModel(company);
    try {
        await newCompany.save();

        res.status(201).json(newCompany);
    } catch (error) {
        res.status(409).json({message: error});
    }
};

export const updateCompany = async (req, res) => {
    const company = req.body;
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Company with that id !!');
    const updatedCompany = await companyModel.findByIdAndUpdate(_id, { ...company, _id}, { new: true});
    res.json(updatedCompany);
};

export const deleteCompany = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Company with that id !!');
    await companyModel.findByIdAndRemove(id);
    res.json({message: 'Company deleted successfully!'});
}
