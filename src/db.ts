import { Connection, createConnection } from 'typeorm';

import config from './config';
import { Inscription } from './entities/inscription';
import { Location } from './entities/location';
import { MedicalData } from './entities/medical-data';
import { Partaker } from './entities/partaker';
import { PersonalData } from './entities/personal-data';
import { Professor } from './entities/professor';
import { School } from './entities/school';
import { Token } from './entities/token';
import { User } from './entities/user';

export class Database {
  private connectionInstance?: Connection;

  async connect() {
    this.connectionInstance = await createConnection({
      type: 'mysql',
      logging: 'all',
      synchronize: true,
      url: config.db.url,
      entities: [
        Inscription,
        PersonalData,
        MedicalData,
        Location,
        Partaker,
        Professor,
        School,
        Token,
        User,
      ],
    });
  }

  get connection() {
    if (!this.connectionInstance) {
      throw new Error('Connect to the database first!');
    }
    return this.connectionInstance;
  }
}

export default new Database();
