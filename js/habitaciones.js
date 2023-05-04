//referencio los botones por su clase
let btnCarousel = document.querySelectorAll('.btn-carousel')

//Funciona para cambiar imagen del carousel trae como argumento el evento de disparo e
function CambiarImagen(e) {
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
    //Me aseguro que mostrar tenga una etiqueta imagen valida y si es valida "apago" ocultar y "enciendo" mostrar
    if (mostrar != null) {
        if (mostrar.src != window.location.href & mostrar.tagName == 'IMG') {
            ocultar.style.display = 'none'
            mostrar.style.display = 'block'
        }
    }
}






//Escucho los clic de todos los botones del carousel por medio del forEach, llamo a la funciona CambiarImagen
btnCarousel.forEach((botones) => {
    botones.addEventListener('click', CambiarImagen)
})