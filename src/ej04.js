import fs from "fs";
import path from "path";

const ARCHIVO_ENTRADA = path.join("src", "archivo-entrada.txt");
const ARCHIVO_SALIDA = path.join("src", "archivo-salida.txt");

console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
  fs.readFile(origen, "utf8", (err, data) => {
    if (err) return;

    fs.writeFile(destino, data, (err) => {
      if (err) return;

      console.log("Se copio a la perfeccion la informacion");
    });
  });
}
