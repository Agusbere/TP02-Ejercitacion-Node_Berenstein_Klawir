let miUrl = null;
let miObjeto = null;
miUrl = "https://www.youtube.com/watch?v=ELSm-G201Ls&list=PLE8uP447fYpis_9iiaT1GrdOLmg85pAJB";
miObjeto = parsearUrl(miUrl);
console.clear();
console.log(miObjeto);
function parsearUrl(laURL) {
    try {

        let url = new URL(laURL);
        return {
            "host": url.host,
            "pathname": url.pathname,
            "parametros": url.searchParams
        };
    
    } catch (error) {
        console.error("Error al encontrar la URL:", error.message);
        return {
            "host": null,
            "pathname": null,
            "parametros": {}
        };
    }
}