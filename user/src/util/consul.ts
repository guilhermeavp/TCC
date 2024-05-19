import Consul from 'consul';
import { randomUUID } from 'crypto';
import { server } from '../routes/user.router';
  export const initConsul = async () => {
    const consul = new Consul({
        host:'127.0.0.1'
      });


    const consulId = randomUUID();
      consul.watch({
        method: consul.health.service,
        options: ({
          service: 'auth',
          passing: true
        } as any)
      });
    
    const opts: Consul.Agent.Service.RegisterOptions = {
      name: 'auth',
      address: server.info.host,
      port: server.info.port as number,
      id: consulId,
      check: {
        http: server.info.uri,
        interval: '5s'
      }
    };
    
    await consul.agent.service.register(opts);
    console.log(`Registrado no consul com id: ${consulId}`);

    async function signalHandler() {
      await consul.agent.service.deregister({ id: consulId });
      console.log('Removido do consul');
      process.exit();
    }

    process.on('SIGINT', signalHandler);
    process.on('SIGTERM', signalHandler);
    process.on('SIGQUIT', signalHandler);
  };