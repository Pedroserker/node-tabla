console.clear();
const { crearArchivo } = require('./helpers/multiplicar')
const argvo = require("./config/yargs");

crearArchivo(argvo.b, argvo.s, argvo.l).then((archivo) => {
        console.log(archivo, "se creó")
    })
    /*
    console.clear();n
    const [, , base = 5] = process.argv;
    console.log(base);
    const [, valor] = base.split("=");
    console.log(valor)

    */