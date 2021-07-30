const argvo = require('yargs').option('b', {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base de la tabla de multiplicación"
}).option('s', {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "muestra la tabla en consola"
}).option('l', {
    alias: "limite",
    type: "number",
    default: 10,
    describe: "limite de la tabla"
}).check((argv, options) => {
    if (isNaN(argv.b)) {
        throw "el valor debe ser numérico"
    }
    return true;
}).argv;

module.exports = argvo;