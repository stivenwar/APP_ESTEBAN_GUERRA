'use strinct'
const Serie = require('../models/serie');
const Puntuacion = require('../models/puntuacion')
const serieController = {
};

serieController.getSeries = async (req, res) => {
    try{
        const series = await Serie.find()
        res.json(series)
    }catch (err){
        res.status(400).json({message: err.message});
    }


};

serieController.getSerie = async (req, res) => {

    try {
        const serie = await Serie.findById(req.params.id)
            res.json(serie);
        if (serie === null) {
             res.status(404).json({message: 'serie no encontrada'})
        }

    }catch (err){
         res.status(500).json({message: err.message})
    }

};

serieController.postPuntuacion = async (req, res) =>{

    try{
        const puntuacion = new Puntuacion(req.body);
        console.log(puntuacion);
        const p = await puntuacion.save()
        console.log(p);
        res.status(201).json({message: 'puntuacion insertada'})
    }catch (err){
        res.status(400).json({message: err.message})
    }
}
serieController.getPuntuacion = async (req, res) => {
    try{
        const punt = await Puntuacion.find()
        res.json(punt)
    }catch (err){
        res.status(400).json({message: err.message});
    }


};
module.exports = serieController;
