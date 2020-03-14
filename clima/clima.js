const axios = require("axios");

const getClima = async (lat,lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=37ee0027270fa1fb5221c7d1f5224e17&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}