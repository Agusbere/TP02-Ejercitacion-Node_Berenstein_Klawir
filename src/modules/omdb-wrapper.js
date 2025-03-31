import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const APIKEY = "a41637f6";

const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: [],
  };

  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: searchText,
        page: page,
        apikey: APIKEY,
      },
      httpsAgent: agent,
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(response.data.totalResults, 10);
      returnObject.datos = response.data.Search;
    } else {
      returnObject.respuesta = false;
      returnObject.datos = [];
    }
  } catch (error) {
    console.error("Error en OMDBSearchByPage:", error);
    returnObject.respuesta = false;
    returnObject.datos = [];
  }

  return returnObject;
};

const OMDBSearchComplete = async (searchText, page = 1, results = 0) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: [],
  };

  try {
    const firstResponse = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: searchText,
        page: page,
        apikey: APIKEY,
      },
      httpsAgent: agent,
    });

    if (firstResponse.data.Response === "True") {
      results = parseInt(firstResponse.data.totalResults, 10);
      returnObject.respuesta = true;
      returnObject.cantidadTotal = results;
      returnObject.datos = firstResponse.data.Search;

      const pages = Math.ceil(results / 10);

      for (let i = page + 1; i <= pages; i++) {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            texto: searchText,
            page: i,
            apikey: APIKEY,
          },
          httpsAgent: agent,
        });

        if (response.data.Response === "True") {
          returnObject.datos = returnObject.datos.concat(response.data.Search);
        }
      }
    } else {
      returnObject.respuesta = false;
      returnObject.datos = [];
    }
  } catch (error) {
    console.error("Error en OMDBSearchComplete:", error);
    returnObject.respuesta = false;
    returnObject.datos = [];
  }

  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
    respuesta: false,
    datos: {},
  };

  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        i: imdbID,
        apikey: APIKEY,
      },
      httpsAgent: agent,
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = response.data;
    } else {
      returnObject.respuesta = false;
      returnObject.datos = {};
    }
  } catch (error) {
    console.error("Error en OMDBGetByImdbID:", error);
    returnObject.respuesta = false;
    returnObject.datos = {};
  }

  return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
