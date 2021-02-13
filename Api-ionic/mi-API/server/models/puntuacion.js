const mongoose = require('mongoose');
const { Schema } = mongoose;

const puntuacionSchema =({
    email:{type:String},
    puntuacion:{type:Number},
    titulo:{type:String}
});
module.exports = mongoose.model('Puntuacion',puntuacionSchema,'puntuacionSerie');
