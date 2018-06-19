
const request = require('request');

module.exports.bootstrap = async function(done) {

  setInterval(

    ()=>{
      console.log('hola mundo');

      const objetoRequest = {
        url: 'http://localhost:1338/Pulsacion',
        form: {
          nombreRaspberry: 'Lolita',
          usuarioIdFK: 1

        }
      };
      request
        .post(objetoRequest,
          (err, respuesta, body) => {
            console.log('err', err);
            console.log('respuesta', respuesta);
            console.log('body', body);
          })
    }


    , 10000);

  return done();

};
