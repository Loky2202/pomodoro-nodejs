

const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const reiniciar = document.getElementById('reiniciar')

let valorMin = parseInt(minutos.textContent)
let valorSeg = parseInt(segundos.textContent)

let oriMin = valorMin;
let oriSeg = valorSeg;

iniciar.addEventListener('click', (e) => {

    e.target.setAttribute('disabled', 'true')
    e.target.setAttribute('aria-disabled', 'true')
    
    const idP = setInterval(function () {
        
        if (valorSeg == 0) {
            valorMin--
            minutos.innerHTML = ('0' + valorMin).slice(-2)
            valorSeg = 60
        }
        valorSeg--
        if (valorSeg < 60) {

            minutos.innerHTML = ('0' + valorMin).slice(-2)
            segundos.innerHTML = ('0' + valorSeg).slice(-2)
        }
        if (valorMin == -1) {
            
            valorMin = (parseInt(minutos.textContent) + 1)
            valorSeg = oriSeg
            console.log(valorMin + "textContent: " + minutos.textContent)
            minutos.innerHTML = ('0' + oriMin).slice(-2)
            segundos.innerHTML = ('0' + oriSeg).slice(-2)
            console.log('final')
            e.target.removeAttribute('disabled')
            e.target.removeAttribute('aria-disabled')
            clearInterval(idP)

        }
    }, 1000);

    reiniciar.addEventListener('click', () => {
        window.clearInterval(idP)
        
    })

    parar.addEventListener('click', () => {
        window.clearInterval(idP)
        e.target.removeAttribute('disabled')
        e.target.removeAttribute('aria-disabled')
    })



})
















