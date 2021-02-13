const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const {mongoose} = require('./database')

//AJUSTES
app.set('port',process.env.PORT||3000);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//RUTAS
app.use('/api/series',require('./server/routes/series'))
app.use('/api/puntuacion',require('./server/routes/puntuaciones'))
//CORRER SERVIDOR
app.listen(app.get('port'),() =>{
   console.log('Server on port',app.get('port'));
});

