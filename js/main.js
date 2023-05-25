let clima = document.getElementById('clima')
let cerrar = document.querySelector('.cerrar')

var abierto = false
var cargado = false


let dias = {
    0: 'Dom',
    1: 'Lun',
    2: 'Mar',
    3: 'Mie',
    4: 'Jue',
    5: 'Vie',
    6: 'Sab'
}

let today = new Date()
let day = today.getDay()

function cerrarClima() {
    clima.style.display = 'none'
    abierto = false
}

function armadoActual(climaActual) {
    let actual = document.querySelector('.actual')
    let img = actual.querySelector('.imgActual')
    let descripcion = actual.querySelector('.descripcionActual')
    let temp = actual.querySelector('.tempActual')
    let icon = null
    if (climaActual[0].WeatherIcon >= 10) {
        icon = climaActual[0].WeatherIcon
    } else {
        icon = '0' + climaActual[0].WeatherIcon
    }

    img.src = `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
    descripcion.innerHTML = climaActual[0].WeatherText
    temp.innerHTML = climaActual[0].Temperature.Metric.Value + '°'
}

function armadoExtendido(climaExt) {
    for (let i = 0; i < 5; i++) {
        let dia = document.querySelector(`.dia${i}`)
        let diaSemana = dia.querySelector(`.diaSemana${i}`)
        let img = dia.querySelector(`.imgDia${i}`)
        let descripcion = dia.querySelector(`.descripcionDia${i}`)
        let tempMin = dia.querySelector(`.tempMinDia${i}`)
        let tempMax = dia.querySelector(`.tempMaxDia${i}`)
        let icon = null

        if (climaExt.DailyForecasts[i].Day.Icon >= 10) {
            icon = climaExt.DailyForecasts[i].Day.Icon
        } else {
            icon = `0${climaExt.DailyForecasts[i].Day.Icon}`
        }

        let today = new Date()
        let day = today.getDay()
        let fecha = new Date(climaExt.DailyForecasts[i].Date)
        let numero = fecha.getDay()
        if (day == numero) {
            diaSemana.innerHTML = 'Hoy'
        } else {
            diaSemana.innerHTML = dias[numero]
        }
        img.src = `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
        descripcion.innerHTML = climaExt.DailyForecasts[i].Day.IconPhrase
        tempMax.innerHTML = climaExt.DailyForecasts[i].Temperature.Maximum.Value + '°'
        tempMin.innerHTML = climaExt.DailyForecasts[i].Temperature.Minimum.Value + '°'
    }
}

async function abrirClima() {
    if (abierto == true) {
        cerrarClima()
    } else {
        clima.style.display = 'block'
        if (cargado == false) {
            try {
                const response = await fetch("https://dataservice.accuweather.com/currentconditions/v1/7894?apikey=6jojw7bk2HzGaI39Cl7qGoAFeNa0Xe6u&language=es-ar")
                const climaActual = await response.json()

                const response1 = await fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/7894?apikey=6jojw7bk2HzGaI39Cl7qGoAFeNa0Xe6u&language=es-ar&metric=true")
                const climaExt = await response1.json()
                let ciudad = document.querySelector('.titulo-clima').querySelector('h2')
                ciudad.innerHTML = 'BUENOS AIRES'
                armadoActual(climaActual)
                armadoExtendido(climaExt)
                cargado = true
            }
            catch (error) { console.log('ERROR AL CARGAR API', error) }
        }
        abierto = true
    }
}

cerrar.addEventListener('click', cerrarClima)