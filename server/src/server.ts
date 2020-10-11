import express from 'express';
import cors from 'cors';

import routes from './routes';

const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

mongoose.connect('mongodb://192.168.0.105:27017/loggys', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

requireDir('./models');

// console.log(date);


//App ira responder na porta 3333
app.listen('3333', () => {
    console.log('Server running on port 3333');
});
