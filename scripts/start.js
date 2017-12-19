const {HTTP} = require('..');
const {connectToMongo} = require('../src/lib/mongodb');
const config = require('../config');

(async () => {
  let mongo = await connectToMongo(config.mongoUrl);
  let http = new HTTP({config});
  await http.listen();
  console.log(`Servidor corriendo en ${config.httpHost}:${config.httpPort} y conectado a MongoDB`);
})()
.catch((err) => {
  console.error('ERROR:', err);
});
