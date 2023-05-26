const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 1, listar, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${'x'.green} ${i} = ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("-------------------");
      console.log(`Tabla del ${base}`.magenta);
      console.log("-------------------");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    return `Tabla del ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
