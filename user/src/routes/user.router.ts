import { server as HapiServer } from '@hapi/hapi';
import { User } from '../models/user';
import { userCreate } from '../controller/user';
import { failAction } from '../util/actionHandler';

export const server = HapiServer();


export const initRoutes = async () => {
    const user = new User();

    server.route({
      method: 'GET',
      path: '/',
      handler: (_, reply) => reply.response('').code(200)
    });
  
    server.route({
      method: 'GET',
      path: '/api/',
      handler: () => user.getAll()
    });
    
     server.route({
      method: 'POST',
      path: '/api/',
      options: {
        validate: {
            payload: userCreate,
            failAction: failAction
        }
      },
      handler: req => user.create(req.payload)
    });

    server.route({
      method: 'POST',
      path: '/api/valid',
      options: {
        validate: {
            payload: userCreate,
            failAction: failAction
        }
      },
      handler: req => user.validUser(req.payload)
    });

    server.route({
        method: 'PUT',
        path: '/api/{id}',
        handler: req => user.update(req.payload,req.params.id)
      });

    server.route({
      method: 'DELETE',
      path: '/api/{id}',
      handler: req => user.delete(req.params.id)
    });

    server.route({
        method: 'GET',
        path: '/api/{id}',
        handler: req => user.getID(req.params.id)
      });
  };


