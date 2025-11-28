const app   = require('./app');


console.log('Iniciando la aplicación...');app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});