const hbs=require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('getProductos',(options)=>{
    const fs = require('fs');
    let rawdata = fs.readFileSync('./data/productos.json');
    let productos=JSON.parse(rawdata);
    return options.fn(productos);
});
