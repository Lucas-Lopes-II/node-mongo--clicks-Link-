const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRouters = require('./routers/LinkRouters');
const path = require('path');
const PORT = 3000;

mongoose.connect('mongodb://localhost/newLinks', { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection
db.on('error', () => console.log('houve um erro')); 
db.once('open', () => console.log('Banco carregado'));

app.set('view engine', 'ejs');
app.set('/', path.join(__dirname, 'views'));

app.use('/', linkRouters);

app.listen(PORT, () => {
    try{
        console.log(`Sever running on ${PORT} port`)
    }catch(err){
        console.log(err)
    }
});