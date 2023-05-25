//referencio los botones por su clase
let btnCarousel = document.querySelectorAll('.btn-carousel')
let btnSelector = document.querySelectorAll('.btn-selector')

//referencio las distintas habitaciones por medio del id
let sencilla = document.getElementById('sencilla')
let doble = document.getElementById('doble')
let triple = document.getElementById('triple')
let jrSuite = document.getElementById('jrSuite')



//FUNCION PARA CABIAR IMAGEN DEL CAROUSEL trae como argumento el evento de disparo e
function cambiarImagen(e) {
    let mostrar = null
    let ocultar = null

    //busco todas las etoquetas img en el nodo padre de los botones y las cargo en la variable imagenes
    let imagenes = e.target.parentNode.getElementsByTagName('img')

    //Armo un array con la variable imagenes y recorro todas las etiquetas img con el forEach
    Array.from(imagenes).forEach(function (element) {
        //Encuentro la etiqueta img que esta activa actualmente, osea la que tiene display block y la cargo en la variable ocultar
        if (element.style.display == 'block') {
            ocultar = element
            //pregunto si el evento fue el boton "siguiente" y cargo en mostrar la etiqueta img siguiente a la que se esta mostrando
            if (e.target.classList[1] == 'siguiente') {
                mostrar = element.nextElementSibling
            }
            //pregunto si el evento fue el boton "anterior" y cargo en mostrar la etiqueta img anterior a la que se esta mostrando
            if (e.target.classList[1] == 'anterior') {
                mostrar = element.previousElementSibling
            }
        }
    })
    //Si mostrar esta vacio el carousel pega la vuelta
    if (mostrar == null) {
        if (e.target.classList[1] == 'siguiente') {
            mostrar = e.target.parentNode.firstElementChild.firstElementChild
        } else if (e.target.classList[1] == 'anterior') {
            mostrar = e.target.parentNode.firstElementChild.lastElementChild
        }
    }
    ocultar.style.display = 'none'
    mostrar.style.display = 'block'
}// FIN FUNCION


//FUNCION PARA CAMBIAR LA HABITACION QUE SE MUESTRA EN PANTALLA, trae como argumento el evento de disparo e
function cambiarHabitacion(e, estado = false) {
    //'Apago' todas las pantallas, no importa cual este encendida
    sencilla.style.display = 'none'
    doble.style.display = 'none'
    triple.style.display = 'none'
    jrSuite.style.display = 'none'

    let cambiar = null

    //por medio del forEach pongo el color de fondo a todos los botones al estandar
    btnSelector.forEach((boton) => { boton.style.backgroundColor = '#b8ab6d' })

    if (estado == false) {
        //cambio el color de fondo del boton presionado
        e.target.style.backgroundColor = '#7e764d'
        cambiar = e.target.name
    }
    else {
        btnSelector.forEach((boton) => {
            if (e == boton.name) { boton.style.backgroundColor = '#7e764d' }
        })


        cambiar = e
    }

    //a travez del atributo name del boton busca cual seccion encender a travez de su id. El id de la seccoin y el atributo name del boton deben ser iguales 
    switch (cambiar) {
        case sencilla.id:
            sencilla.style.display = 'flex'
            break
        case doble.id:
            doble.style.display = 'flex'
            break
        case triple.id:
            triple.style.display = 'flex'
            break
        case jrSuite.id:
            jrSuite.style.display = 'flex'
            break
    }
}

cambiarHabitacion('sencilla', true)


//Escucho los clic de todos los botones del carousel por medio del forEach, llamo a la funcion cambiarImagen
btnCarousel.forEach((botones) => {
    botones.addEventListener('click', cambiarImagen)
})

//Escucho los clic de todos los botones del selector de habitaciones por medio del forEach, llamo a la funcion cambiarHabitacion
btnSelector.forEach((botones) => {
    botones.addEventListener('click', cambiarHabitacion)
})