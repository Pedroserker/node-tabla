const crearArchivo = async(base = 5, show = false, limit) => {
    const fs = require('fs');
    const color = require('colors');
    let salida = "";
    let consola = "";
    try {

        for (let i = 1; i <= limit; i++) {

            salida += `${base} X ${i} = ${i*base} \n`;
            consola += `${base} X ${i} = ${i*base} \n`.rainbow;

        }
        fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);

        if (show) {
            console.log(`tabla del ${base}`.green)
            console.log(consola)
        }
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
};