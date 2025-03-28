let miUrl = null;
let miObjeto = null;
miUrl = "https://www.nike.com.ar/air-jordan-4-retro-fq8138-002/p";
miObjeto = parsearUrl(miUrl);
console.log(miObjeto);
function parsearUrl(laURL) {
    let url = new URL(laURL);

    return {
        "host": url.host,
        "pathname": url.pathname,
        "parametros": url.searchParams
    };
}
