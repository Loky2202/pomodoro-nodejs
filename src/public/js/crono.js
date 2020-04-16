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

iniciar.addEventListener('click', (e) => {
    let audio = new Audio('http://localhost:3000'+'/audio/alert.mp3')
    let valorMin = parseInt(minutos.textContent)
    let valorSeg = parseInt(segundos.textContent)

    let oriMin = valorMin;
    let oriSeg = valorSeg;
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
            
            timer.stop()
            audio.play()
            valorMin = (parseInt(minutos.textContent) + 1)
            valorSeg = oriSeg
            minutos.innerHTML = ('0' + oriMin).slice(-2)
            segundos.innerHTML = ('0' + oriSeg).slice(-2)
            e.target.removeAttribute('disabled')
            e.target.removeAttribute('aria-disabled')
            
    
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




