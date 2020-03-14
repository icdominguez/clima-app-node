const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion).then(console.log)

/*clima.getClima(40.750000, -74.000000)
.then(console.log).catch( err => console.log(err))*/


const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng)   
        return `El clima de ${direccion} es ${temp}`
    } catch (e) {
        return `No se puede obtener la temperatura de ${direccion}`
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log)
