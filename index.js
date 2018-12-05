const fs = require("fs");
const fops = require ('./src/fileops');

//path del archivo a leer
let read_path = '<./resources/number.txt>'

//path donde se guardará el archivo escrito
let write_path = '<./resources/new_number.txt>'


fs.readFile(read_path, "utf8",(error,result) => {
    if(error) throw error;
    let newText = fops.incrementValues(result);
    fs.writeFile(write_path, newText,(error,result)=>{
        if(error) throw error;
        console.log("script creado");
    });
});
