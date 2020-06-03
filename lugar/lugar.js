const axios = require('axios');


const getLugarLatLong = async direccion => {
    const encodeUrl=encodeURIComponent(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '8fd8a8ccf7msh5e71a461781c0cap184f1djsnabffd5552e3f'}
      });

    const resp = await instance.get();
    if  (resp.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const data = resp.data.Results[0];
    return {
        direccion:data.name,
        lat:data.lat,
        lon:data.lon
    };
}

module.exports={
    getLugarLatLong
}

