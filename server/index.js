import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/routes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "25mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "25mb", extended:true}));
app.use(cors());
app.use('/TechStore', routes);
app.get ('/',(req,res)=>{
    res.send('Hello to OBO Tech Store API!')
});

const CONNECTION_URL =process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>app.listen(PORT, () => console.log(`Server running on port: ${PORT} ! Enjoy :D`)))
    .catch((error => console.log(error)));

mongoose.set('useFindAndModify', false);
