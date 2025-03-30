import { getCountryByAbbreviation } from 'currency-map-country';
import { getCurrencyAbbreviation } from 'currency-map-country';

console.clear();
let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais){
    return getCurrencyAbbreviation(getCountryByAbbreviation(codigoPais))
}