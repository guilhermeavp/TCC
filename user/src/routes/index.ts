import { server as HapiServer } from '@hapi/hapi';
import userRoutes from './user.router';

export const server = HapiServer();

export const initRoutes = async () => {
    const routesMicroService = [...userRoutes];
     server.route(routesMicroService);
  };
