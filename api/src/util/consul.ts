import Consul from 'consul';

export const servicos = ['carrinho', 'estoque', 'pedidos', 'precos', 'produtos','user','payment'];
export const urls = new Map<string, string>();

export const initConsul = async () => {
  const consul = new Consul({
    host:'127.0.0.1'
   // host:'127.0.0.1@consul1'
  });
  // Configura os serviços e escuta por mudanças no Consul
  for (const servico of servicos) {
    consul.watch({
      method: consul.health.service,
      options: ({
        service: servico,
        passing: true
      } as any)
    }).on('change', (nodos) => {
      urls.set(servico, nodos.map(n => `http://${n.Service.Address}:${n.Service.Port}/api`)[0]);
    }).on('error', e => console.error(e));
  }
};
