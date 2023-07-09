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
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("checkin").value = decodeURIComponent(parts[1][1])
document.getElementById("checkout").value = decodeURIComponent(parts[2][1])
document.getElementById("habitacion").value = decodeURIComponent(parts[3][1])
//document.getElementById("precio").value = decodeURIComponent(parts[4][1])
document.getElementById("nombre").value = decodeURIComponent(parts[5][1])
document.getElementById("apellido").value = decodeURIComponent(parts[6][1])
document.getElementById("telefono").value = decodeURIComponent(parts[7][1])
document.getElementById("email").value = decodeURIComponent(parts[8][1])
document.getElementById("comentario").value = decodeURIComponent(parts[9][1])

function modificar() {
    let id = document.getElementById("id").value
    let i = document.getElementById("checkin").value
    let o = document.getElementById("checkout").value
    let h = document.getElementById("habitacion").value
    let p = decodeURIComponent(parts[4][1])
    let n = document.getElementById("nombre").value
    let a = document.getElementById("apellido").value
    let t = document.getElementById("telefono").value
    let e = document.getElementById("email").value
    let c = document.getElementById("comentario").value

    let grabar = {
        id: id,
        checkin: i,
        checkout: o,
        habitacion: h,
        precio: p,
        nombre: n,
        apellido: a,
        telefono: t,
        email: e,
        comentario: c,
    }

    let url = "https://crudHotel.pythonanywhere.com/reservas/" + id
    var options = {
        body: JSON.stringify(grabar),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            reserva = data;
            console.log("modificado")
            alert("Los datos de reserva fueron modificados con exito")
            window.location.href = '../pages/reserva.html?id=' + reserva.id + '&checkin=' + reserva.checkin + '&checkout=' + reserva.checkout + '&habitacio=' + reserva.habitacion + '&precio=' + reserva.precio + '&nombre=' + reserva.nombre + '&apellido=' + reserva.apellido + '&telefono=' + reserva.telefono + '&email=' + reserva.email + '&comentario=' + reserva.comentario;
            //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })
}
