import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'

let resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

let resultadoCompleto = await OMDBSearchComplete("cars");
console.log("OMDBSearchComplete", resultadoCompleto);

let informacion = await OMDBGetByImdbID("tt0848228");
console.log("OMDBGetByImdbID", informacion);