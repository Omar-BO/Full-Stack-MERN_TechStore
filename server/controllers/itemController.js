import mongoose from 'mongoose';
import ItemModel from '../models/itemModel.js'

export const getItems = async (req, res) => {
    try {
        const itemModel = await ItemModel.find();
        res.status(200).json(itemModel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createItem = async (req, res) => {
    const { name, description, price, quantity, quote, selectedFile } = req.body;

    const newItemModel = new ItemModel({ name, description, price, quantity, quote, selectedFile });

    try {
        await newItemModel.save();

        res.status(201).json(newItemModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity, quote, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

    const updatedItem = { name, description, price, quantity, quote, selectedFile, _id: id };

    await ItemModel.findByIdAndUpdate(id, updatedItem, { new: true });

    res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id: ${id}`);

    await ItemModel.findByIdAndRemove(id);

    res.json({ message: 'Item deleted successfully'});
}