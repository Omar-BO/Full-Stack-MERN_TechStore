import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    quantity: String,
    quote: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ItemModel = mongoose.model('ItemModel', itemSchema);

export default ItemModel;