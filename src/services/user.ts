import { EntityService } from './entity';
import { User } from '../entities/user';
import { createRefreshToken, createSessionToken } from '../utils/auth';
import { tokenService } from './token';

class UserService extends EntityService<User> {
  constructor() {
    super(User);
  }

  async createTokens(user: User) {
    const refreshToken = createRefreshToken();
    await tokenService.create({
      value: refreshToken,
      userId: user.id,
    });
    return {
      sessionToken: createSessionToken(user),
      refreshToken,
    };
  }
}

export const userService = new UserService();
