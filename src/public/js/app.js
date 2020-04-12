

minutos = document.getElementById('minutos');
segundos = document.getElementById('segundos');

const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')

let s = 3
let m = 1

var valorSeg = s
var valorMin = m - 1
var i = 1;

iniciar.addEventListener('click', (e) => {

    e.target.setAttribute('disabled', 'true')
    e.target.setAttribute('aria-disabled', 'true')
    let idP = window.setInterval(function () {
        if (valorSeg == 0) {
            valorSeg = 60
        }
        valorSeg--
        if (valorSeg < 60) {

            minutos.innerHTML = ('0' + valorMin).slice(-2)
            segundos.innerHTML = ('0' + valorSeg).slice(-2)
        }
        if (valorSeg == 0) {
            valorMin--
            minutos.innerHTML = ('0' + valorMin).slice(-2)
            valorSeg = 60

        }
        if (valorMin <= -1) {
            minutos.innerHTML = '00'
            valorMin = m - 1
            valorSeg = s
            e.target.removeAttribute('disabled')
            e.target.removeAttribute('aria-disabled')
            window.clearInterval(idP)

        }
    }, 1000);

    parar.addEventListener('click', () => {
        window.clearInterval(idP)
        e.target.removeAttribute('disabled')
        e.target.removeAttribute('aria-disabled')
    })



})
















