import { EntityService } from './entity';
import { School } from '../entities/school';

class SchoolService extends EntityService<School> {
  constructor() {
    super(School);
  }
}

export const schoolService = new SchoolService();
