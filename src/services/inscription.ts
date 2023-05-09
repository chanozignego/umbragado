import { EntityService } from './entity';
import { Inscription } from '../entities/inscription';

class InscriptionService extends EntityService<Inscription> {
  constructor() {
    super(Inscription);
  }
}

export const inscriptionService = new InscriptionService();
