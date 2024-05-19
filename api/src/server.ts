import { initRoutes, server } from './routes/api.router';
import { initConsul } from './util/consul';

const init = async () => {
  await initConsul();
  await initRoutes();
  await server.start();
  console.log('Gateway da API iniciado em %s', server.info.uri);
};

init();