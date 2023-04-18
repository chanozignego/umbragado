import { randomBytes } from 'crypto';
import { sign } from 'jsonwebtoken';

import config from '../config';
import { User } from '../entities/user';

export const REFRESH_TOKEN_COOKIE = 'elections_refresh_token';

export function createRefreshToken() {
  return randomBytes(48).toString('hex');
}

export function createSessionToken(user: User) {
  const { password, ...info } = user;
  return sign(info, config.auth.secret, { expiresIn: '15m' });
}
