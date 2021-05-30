import mongoose from 'mongoose';

const billSchema = mongoose.Schema({
    id : Number,
    client: String,
    total: Number,
    reduction: Number,
    status: String,
    addedAt: {
        type: Date,
        default: new Date()
    },
});

const billModel = mongoose.model('billModel',billSchema);


export default billModel;