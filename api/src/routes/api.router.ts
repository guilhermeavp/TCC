import { server as HapiServer } from '@hapi/hapi';
import h2o2 from '@hapi/h2o2';
import JWTAuth from 'hapi-auth-jwt2';
import { Servico } from '../model/login';
import { servicos, urls } from '../util/consul';
import dotenv from 'dotenv';
dotenv.config();
export const server = HapiServer({
  port: process.env.PORT
});

export const initRoutes = async () => {

  const authService = new Servico();

  await server.register([
    JWTAuth,
    h2o2
  ]);

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.SECRET,
    validate: async function (decoded, request) {
        if (!decoded) {
            return { isValid: false };
        } else {
            const validate = await authService.findToken(decoded);
            return { isValid: validate };
        }
    },
    verifyOptions: {
      algorithms: [ 'HS256' ]
    },
    cookieKey: 'id_token'
});

server.auth.default('jwt');

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request: any, h) {

      const payload = request.payload;

      return `Welcome ${payload}!`;
  }
  });

  server.route({
    method: 'POST',
    path: '/token',
    options: { auth: false },
    handler: async (req, reply) =>{ 
      try{
        const token = await authService.validar(req.payload); // synchronous
        return reply.response('Check Auth Header for your Token')
          .header('Authorization', token)
          .code(200);
      } catch (error){
        console.log('error',error.output);
        return error;
      }

    }
  });

  for (const servico of servicos) {
    const prefix = `/api/${servico}`;
    server.route({
      method: '*',
      options: {auth: 'jwt'},
      path: `${prefix}/{path*}`,
      handler: {
        proxy: {
          mapUri: async req => {
            const uri = `${urls.get(servico)}/${req.path.substring(prefix.length + 1)}${req.url.search}`;
            return Promise.resolve({ uri });
          },
          passThrough: true,
          ttl: 'upstream'
        }
      }
    });
  }
  };
