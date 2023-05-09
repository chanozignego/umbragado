import { EntityService } from './entity';
import { Partaker } from '../entities/partaker';

class PartakerService extends EntityService<Partaker> {
  constructor() {
    super(Partaker);
  }
}

export const partakerService = new PartakerService();
