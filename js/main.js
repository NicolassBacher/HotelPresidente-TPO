let clima = document.getElementById('clima')
let cerrar = document.querySelectorAll('.cerrar')
let cargarAPI = false

function abrirClima() {
    clima.style.display = 'block'

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 11,
        cityid: '2643743',
        appid: 'bf0e36153bffd0cb50905ff84d069059',
        units: 'metric',
        containerid: 'openweathermap-widget-11',
    });
    (function () {
        var script = document.createElement('script');
        script.async = true; script.charset = "utf-8";
        script.src = "http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    })();
}



cerrar.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'cerrar') { clima.style.display = 'none' }
    })
});



