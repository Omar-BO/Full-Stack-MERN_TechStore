import mongoose from 'mongoose';
import ContactModel from '../models/contactModel.js'

export const getContacts = async (req, res) => {
    try {
        const contactModel = await ContactModel.find();

        res.status(200).json(contactModel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createContact = async (req, res) => {
    const { firstname, lastname, email, phone, company } = req.body;

    const newContactModel = new ContactModel({ firstname, lastname, email, phone, company });

    try {
        await newContactModel.save();

        res.status(201).json(newContactModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateContact = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, phone, company } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contact with id: ${id}`);

    const updatedContact = { firstname, lastname, email, phone, company, _id: id };

    await ContactModel.findByIdAndUpdate(id, updatedContact, { new: true });

    res.json(updatedContact);
}

export const deleteContact = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No contact with id: ${id}`);

    await ContactModel.findByIdAndRemove(id);

    res.json({ message: 'Contact deleted successfully'});
}