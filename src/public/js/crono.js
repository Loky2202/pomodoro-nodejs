function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}


const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const reiniciar = document.getElementById('reiniciar')

const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let valorMin = parseInt(minutos.textContent)
let valorSeg = parseInt(segundos.textContent)

let oriMin = valorMin;
let oriSeg = valorSeg;

iniciar.addEventListener('click', (e) => {
    
    e.target.setAttribute('disabled', 'true')
    e.target.setAttribute('aria-disabled', 'true')
    const timer = new Timer(function() {
    
        //Inicia la funcion a ejecutar
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
            mensajeE()
            valorMin = (parseInt(minutos.textContent) + 1)
            valorSeg = oriSeg
            minutos.innerHTML = ('0' + oriMin).slice(-2)
            segundos.innerHTML = ('0' + oriSeg).slice(-2)
            e.target.removeAttribute('disabled')
            e.target.removeAttribute('aria-disabled')
            timer.stop()
    
        }
    }, 1000);

    
    parar.addEventListener('click', () => {
        // stop the timer
        timer.stop();
        e.target.removeAttribute('disabled')
        e.target.removeAttribute('aria-disabled')
    })
    reiniciar.addEventListener('click', () => {
        //reinicia al valor original
        timer.stop()
        valorMin = oriMin
        valorSeg = oriSeg
        minutos.innerHTML = ('0' + oriMin).slice(-2)
        segundos.innerHTML = ('0' + oriSeg).slice(-2)
        e.target.removeAttribute('disabled')
        e.target.removeAttribute('aria-disabled')        
    
    })
})






const mensajeE = () => {
    alert('Tiempo!!!!')
}

