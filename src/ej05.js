let miUrl = null;
let miObjeto = null;
miUrl = 'https://www.nike.com.ar/hombre/zapatillas/moda';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
    laURL = url.parse('https://www.nike.com.ar/hombre/zapatillas/moda')
}