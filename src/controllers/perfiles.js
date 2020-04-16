

exports.index = (req, res, next) => {
    res.render('home', {
        perfil: 'Pomodoro',
        min: '25',
        seg: '00'
    })
}

exports.perfil = async (req, res, next) => {

    const perfil=  req.params.perfil;

    let min = '00';
    if(perfil === 'corto'){
        min = '05';
    }else if (perfil === 'largo') {
        min = '10';
    } else {
        res.redirect('/');
    }

    res.render('home', {
        perfil: 'Descanso...',
        min,
        seg: '00'
    })
}