import { badData } from '@hapi/boom';
import { AuthDto } from '../interface/user-dto';
import { loginExemplo } from '../massa/loginExemplo';

export class Servico {

  async validar(dto?: AuthDto): Promise<string> {
    if (!dto.login  || !dto.senha 
    ) {
      return Promise.reject(badData('Login e senha devem ser preenchidos'));
    }
    if (dto.login === loginExemplo.login && 
      dto.senha === loginExemplo.senha
    ) {
      return Promise.resolve('Logado com sucesso');
    }
    return Promise.reject(badData('Login ou senha invalidos'));
  }
}
