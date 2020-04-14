

exports.index = (req, res, next) => {
    res.render('home', {
        perfil: 'Default',
        min: '25',
        seg: '00'
    })
}

exports.perfil = async (req, res, next) => {


    res.render('home', {
        perfil: req.params.perfil,
        min: '00',
        seg: '04'
    })
}