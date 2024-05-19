import { server as HapiServer } from '@hapi/hapi';
import { Mongo } from '../models/mongo';

export const server = HapiServer();


export const initRoutes = async () => {
    const mongo = new Mongo();

    server.route({
      method: 'GET',
      path: '/',
      handler: (_, reply) => reply.response('').code(200)
    });
  
    server.route({
      method: 'GET',
      path: '/api/',
      handler: () => mongo.getAll()
    });
    
     server.route({
      method: 'POST',
      path: '/api/',
      handler: req => mongo.create(req.payload)
    });

    server.route({
        method: 'PUT',
        path: '/api/{id}',
        handler: req => mongo.update(req.payload,req.params.id)
      });

    server.route({
      method: 'DELETE',
      path: '/api/{id}',
      handler: req => mongo.delete(req.params.id)
    });

    server.route({
        method: 'GET',
        path: '/api/{id}',
        handler: req => mongo.getID(req.params.id)
      });
  };


