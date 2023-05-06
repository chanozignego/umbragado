import { EntityService } from './entity';
import { Professor } from '../entities/professor';

class ProfessorService extends EntityService<Professor> {
  constructor() {
    super(Professor);
  }
}

export const professorService = new ProfessorService();
