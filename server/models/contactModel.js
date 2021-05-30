import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    company: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ContactModel = mongoose.model('ContactModel', contactSchema);

export default ContactModel;