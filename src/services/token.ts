import { EntityService } from './entity';
import { Token } from '../entities/token';

class TokenService extends EntityService<Token> {
  constructor() {
    super(Token);
  }
}

export const tokenService = new TokenService();
