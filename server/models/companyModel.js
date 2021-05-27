import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    zipCode: String,
    country: String,
    logo: String,
    addedAt: {
        type: Date,
        default: new Date()
    },
});

const companyModel = mongoose.model('companyModel',companySchema);


export default companyModel;