const axios = require('axios');

const getClima= async lugar => {
    const appid='39511f851ae9222760c39da216768eee';
    const baseURL= `https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lon}&appid=${appid}&units=metric`;
    return `El clima de ${lugar.direccion} es ${(await axios.get(baseURL)).data.main.temp}°`;
}

module.exports={
    getClima
}

