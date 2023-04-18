import { scrypt } from 'crypto';

import config from '../config';

const ENCODING = 'hex';

export function encryptPassword(password?: string): Promise<string> {
  if (!password) {
    throw new Error('Empty password');
  }
  return new Promise((resolve, reject) => {
    scrypt(password, config.server.secret, 32, (err, key) => {
      if (err) {
        reject(err);
      } else {
        resolve(key.toString(ENCODING));
      }
    });
  });
}
