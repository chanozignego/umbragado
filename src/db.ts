import { Connection, createConnection } from 'typeorm';

import config from './config';
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
