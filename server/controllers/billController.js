import billModel from '../models/billModel.js';
import mongoose from 'mongoose';

export const getBills = async (req, res) => {
    try {
        const billModels = await billModel.find();
        res.status(200).json(billModels);
    } catch (error) {
        req.status(404).json({message: error});
    }
};

export const addBill = async (req, res) => {
    const bill = req.body;
    const newBill =  new billModel(bill);
    try {
        await newBill.save();

        res.status(201).json(newBill);
    } catch (error) {
        res.status(409).json({error});
    }
};

export const updateBill = async (req, res) => {
    const bill = req.body;
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Bill with that id !!');
    const updatedBill = await billModel.findByIdAndUpdate(_id, { ...bill, _id}, { new: true});
    res.json(updatedBill);
};

export const deleteBill = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Bill with that id !!');
    await billModel.findByIdAndRemove(id);
    res.json({message: 'Bill deleted successfully!'});
}
