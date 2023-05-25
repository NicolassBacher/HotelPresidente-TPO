const form = document.querySelector('.needs-validation')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const tel = document.querySelector('#tel')
var numbers = /^[0-9\s]+$/;
const checkIn = document.querySelector('#check-in')
const checkOut = document.querySelector('#check-out')
const consulta = document.querySelector('#consulta')
const enviar = document.querySelector('#enviar')

document.addEventListener('input', (e) => {

    let eval = e.target.value

    switch (e.target.name) {
        case ('nombre'):
            for (let i = 0; i < eval.length; i++) {
                let codigo = eval.charCodeAt(i)
                if (eval.length >= 3 && ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122) || codigo == 209 || codigo == 241 || codigo == 233 || codigo == 225 || codigo == 237 || codigo == 243 || codigo == 250 || codigo == 32)) {
                    nombre.classList.add('is-valid')
                    nombre.classList.remove('is-invalid')
                } else {
                    nombre.classList.add('is-invalid')
                    nombre.classList.remove('is-valid')
                    break;
                }
            }
            break;

        case ('apellido'):
            for (let i = 0; i < eval.length; i++) {
                let codigo = eval.charCodeAt(i)
                if (eval.length >= 3 && ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122) || codigo == 209 || codigo == 241 || codigo == 233 || codigo == 225 || codigo == 237 || codigo == 243 || codigo == 250 || codigo == 32)) {
                    apellido.classList.add('is-valid')
                    apellido.classList.remove('is-invalid')

                } else {
                    apellido.classList.add('is-invalid')
                    apellido.classList.remove('is-valid')
                    break;
                }
            }
            break;

        case ('email'):
            if (validEmail.test(eval)) {
                email.classList.add('is-valid')
                email.classList.remove('is-invalid')
            } else {
                email.classList.add('is-invalid')
                email.classList.remove('is-valid')
                break;
            }
            break;

        case ('tel'):
            if (numbers.test(eval) && eval.length > 8) {
                tel.classList.add('is-valid')
                tel.classList.remove('is-invalid')
            } else {
                tel.classList.add('is-invalid')
                tel.classList.remove('is-valid')
                break;
            }
            break;

        case ('check-in'):
            let anio = parseInt(eval.split('-')[0])
            let mes = parseInt(eval.split('-')[1])
            let dia = parseInt(eval.split('-')[2])

            let hoy = new Date()

            if (anio >= hoy.getFullYear()) {
                if (mes >= (hoy.getMonth() + 1)) {
                    console.log(mes, hoy.getMonth())
                    if (dia >= hoy.getDate()) {
                        checkIn.classList.add('is-valid')
                        checkIn.classList.remove('is-invalid')
                        if (checkOut.value > checkIn.value) {
                            checkOut.classList.add('is-valid')
                            checkOut.classList.remove('is-invalid')
                        } else {
                            checkOut.classList.add('is-invalid')
                            checkOut.classList.remove('is-valid')
                        }
                    } else {
                        checkIn.classList.add('is-invalid')
                        checkIn.classList.remove('is-valid')
                    }
                } else {
                    checkIn.classList.add('is-invalid')
                    checkIn.classList.remove('is-valid')
                }
            } else {
                checkIn.classList.add('is-invalid')
                checkIn.classList.remove('is-valid')
            }
            break;

        case ('check-out'):
            console.log(checkIn.value)
            if (checkIn.value != '') {
                let anio = parseInt(checkIn.value.split('-')[0])
                let mes = parseInt(checkIn.value.split('-')[1])
                let dia = parseInt(checkIn.value.split('-')[2])

                let hoy = new Date()

                if (anio >= hoy.getFullYear()) {
                    if (mes >= (hoy.getMonth() + 1)) {
                        if (dia >= hoy.getDate()) {
                            if (checkOut.value > checkIn.value) {
                                checkOut.classList.add('is-valid')
                                checkOut.classList.remove('is-invalid')
                            } else {
                                checkOut.classList.add('is-invalid')
                                checkOut.classList.remove('is-valid')
                            }
                        } else {
                            checkOut.classList.add('is-invalid')
                            checkOut.classList.remove('is-valid')
                        }
                    } else {
                        checkOut.classList.add('is-invalid')
                        checkOut.classList.remove('is-valid')
                    }
                } else {
                    checkOut.classList.add('is-invalid')
                    checkOut.classList.remove('is-valid')
                }
            } else {
                checkOut.classList.add('is-invalid')
                checkOut.classList.remove('is-valid')
            }
            break;
        case ('consulta'):
            {
                if (eval.length >= 20) {
                    consulta.classList.add('is-valid')
                    consulta.classList.remove('is-invalid')
                } else {
                    consulta.classList.add('is-invalid')
                    consulta.classList.remove('is-valid')
                }
            }
            break;
    }
})

form.addEventListener('submit', (event) => {
    if (nombre.value == "") {
        nombre.classList.add('is-invalid')
    }
    if (apellido.value == "") {
        apellido.classList.add('is-invalid')
    }
    if (email.value == "") {
        email.classList.add('is-invalid')
    }
    if (tel.value == "") {
        tel.classList.add('is-invalid')
    }
    if (consulta.value == "") {
        consulta.classList.add('is-invalid')
    }

    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
}, false)


