const { getLugarLatLong } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const axios = require('axios');


const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad a obtener el clima',
        demand: true
    }
});

getLugarLatLong(argv.direccion)
    .then( lugar => getClima(lugar))
    .then( console.log )
    .catch( err => console.log(`El clima de ${argv.direccion} no se pudo determinar error: ${err}` ) );