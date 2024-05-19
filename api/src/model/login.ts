import { badData } from '@hapi/boom';
import { AuthDto } from '../interface/auth-dto';
import { loginExemplo } from '../massa/loginExemplo';
import JWT from 'jsonwebtoken';
import aguid from 'aguid';
const tokens = new Array<any>();
export class Servico {

  async validar(dto: any): Promise<string> {
    const session = {
      valid: true,
      roles:['user'], // this will be set to false when the person logs out
      id: aguid(), // a random session id
      exp: new Date().getTime() + 30 * 60 * 1000 // expires in 30 minutes time
    };

    if (!dto.login  || !dto.senha 
    ) {
      return Promise.reject(badData('Login e senha devem ser preenchidos'));
    }
    if (dto.login === loginExemplo.login && 
      dto.senha === loginExemplo.senha
    ) {
      const token = JWT.sign(session, process.env.SECRET);
      tokens.push(session);
      return Promise.resolve(token);
    }
    return Promise.reject(badData('Login ou senha invalidos'));
  }

  async findToken(req: any): Promise<boolean> {
    console.log('findToken',req);
    console.log('tokens',tokens);

    const find = tokens.find(i => {
      return i.id === req.id;
    });

    if(find){
      return true;
    }
    return false;
  }
}
