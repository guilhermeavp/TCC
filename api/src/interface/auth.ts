import type { WithId, Document } from 'mongodb';

export interface Auth extends WithId<Document> {
    login: string, 
    password: string,
    tipo_acesso: string,
  }