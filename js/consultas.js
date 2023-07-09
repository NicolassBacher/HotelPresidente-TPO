const { createApp } = Vue

createApp({
    data() {
        return {
            error_dispo: '',
            cargando: false,
            error: false,
            formulario: true,
            respuesta: [],
            ingreso: null,
            reserva: [],
            error_buscar: '',
        }
    },
    methods: {
        consultar() {
            let i = document.getElementById("checkin").value
            let o = document.getElementById("checkout").value
            let h = document.getElementById("habit").value

            // {
            //     "checkin": "15/07/2023",
            //     "checkout": "20/07/2023",
            //     "habit": "doble",
            //   }

            let consulta = {
                ingreso: i,
                salida: o,
                habit: h
            }

            let url = "https://crudhotel.pythonanywhere.com/consultas"
            var options = {
                body: JSON.stringify(consulta),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
            //this.cargando = true
            fetch(url, options)
                .then(res => res.json())

                // Devuelve el href (URL) de la página actual
                //window.location.href = "./formulario_reserva.html";
                // Handle response we get from the API


                .then(data => {

                    this.respuesta = data;
                    this.error_dispo = this.respuesta.msj
                    console.log(this.respuesta)
                    if (this.respuesta.disponibilidad == true && this.respuesta.error == false) {
                        this.formulario = false
                        datos = this.respuesta


                    }
                    //this.cargando = false;
                    // if data['disponibilidad'] == True {
                    //     console.log('holis')
                    // }

                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        reservar() {
            let n = document.getElementById("nombre").value
            let a = document.getElementById("apellido").value
            let t = document.getElementById("telefono").value
            let e = document.getElementById("email").value
            let c = document.getElementById("comentario").value

            let grabar = {
                checkin: datos.ingreso,
                checkout: datos.salida,
                habitacion: datos.habit,
                precio: datos.precio,
                nombre: n,
                apellido: a,
                telefono: t,
                email: e,
                comentario: c,
            }

            let url = "https://crudhotel.pythonanywhere.com/reservas"
            var options = {
                body: JSON.stringify(grabar),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }

            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    this.reserva = data;
                    alert(`Felicitaciones, ha realizado la reserva. Su codigo de reserva es ${this.reserva.id}`)
                    window.location.href = '../pages/reserva.html?id=' + this.reserva.id + '&checkin=' + this.reserva.checkin + '&checkout=' + this.reserva.checkout + '&habitacio=' + this.reserva.habitacion + '&precio=' + this.reserva.precio + '&nombre=' + this.reserva.nombre + '&apellido=' + this.reserva.apellido + '&telefono=' + this.reserva.telefono + '&email=' + this.reserva.email + '&comentario=' + this.reserva.comentario;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        buscar() {
            let codigo = document.getElementById("codigo").value
            let url = "https://crudhotel.pythonanywhere.com/reservas/" + codigo
            var options = {
                method: 'GET',
            }
            this.cargando = true
            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    this.busqueda = data;
                    console.log(this.busqueda.id)
                    if (this.busqueda.id == 'error') {
                        this.error_buscar = 'Error al buscar la reserva, codigo no existe'
                        console.log(this.error_buscar)
                    } else {
                        window.location.href = '../pages/reserva.html?id=' + this.busqueda.id + '&checkin=' + this.busqueda.checkin + '&checkout=' + this.busqueda.checkout + '&habitacio=' + this.busqueda.habitacion + '&precio=' + this.busqueda.precio + '&nombre=' + this.busqueda.nombre + '&apellido=' + this.busqueda.apellido + '&telefono=' + this.busqueda.telefono + '&email=' + this.busqueda.email + '&comentario=' + this.busqueda.comentario;
                    }
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
    }
}).mount('#res')