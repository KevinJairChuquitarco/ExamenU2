const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000 ; 

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

const fs = require('fs');
let rawdata = fs.readFileSync(__dirname+'/data/productos.json');
let productos=JSON.parse(rawdata);


app.get('/',(req,res)=>{
    res.render('index',productos);
});

app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`);
});
