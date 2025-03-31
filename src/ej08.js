import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'

let resultado = await OMDBSearchByPage("Cars", 1);
console.log("OMDBSearchByPage", resultado);

let resultadoCompleto = await OMDBSearchComplete("Kung Fu Panda");
console.log("OMDBSearchComplete", resultadoCompleto);

let informacion = await OMDBGetByImdbID("tt0198781");
console.log("OMDBGetByImdbID", informacion);