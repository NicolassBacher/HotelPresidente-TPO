console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');
//separa el string por los “&” creando una lista
// [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts)

//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
let id = document.getElementById("id").innerHTML = decodeURIComponent(parts[0][1])
let checkin = document.getElementById("checkin").innerHTML = decodeURIComponent(parts[1][1])
let checkout = document.getElementById("checkout").innerHTML = decodeURIComponent(parts[2][1])
let habitacion = document.getElementById("habitacion").innerHTML = decodeURIComponent(parts[3][1])
let precio = document.getElementById("precio").innerHTML = decodeURIComponent(parts[4][1])
let nombre = document.getElementById("nombre").innerHTML = decodeURIComponent(parts[5][1])
let apellido = document.getElementById("apellido").innerHTML = decodeURIComponent(parts[6][1])
let telefono = document.getElementById("telefono").innerHTML = decodeURIComponent(parts[7][1])
let email = document.getElementById("email").innerHTML = decodeURIComponent(parts[8][1])
let comentario = document.getElementById("comentario").innerHTML = decodeURIComponent(parts[9][1])

function eliminar() {
    const url = 'https://crudHotel.pythonanywhere.com/reservas/' + id;
    var options = {
        method: 'DELETE',
    }
    fetch(url, options)
        .then(res => res.text()) // or res.json()
        .then(res => {
            alert('Su reserva ha sido eliminada')
            window.location.href = "../index";
        })
}

function modificar() {

    window.location.href = '../pages/reserva_modificar.html?id=' + id + '&checkin=' + checkin + '&checkout=' + checkout + '&habitacio=' + habitacion + '&precio=' + precio + '&nombre=' + nombre + '&apellido=' + apellido + '&telefono=' + telefono + '&email=' + email + '&comentario=' + comentario

}