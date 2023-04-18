import { FastifyInstance } from 'fastify';

import { tokenService } from '../services/token';
import { userService } from '../services/user';
import { createSessionToken, REFRESH_TOKEN_COOKIE } from '../utils/auth';

export default async function (app: FastifyInstance) {
  app.get('/api/tokens/refresh', async (request, reply) => {
    const refreshToken = request.cookies[REFRESH_TOKEN_COOKIE];
    const token = await tokenService.findOneBy({
      where: { value: refreshToken },
    });
    const user = await userService.findOneBy({
      where: { id: token.userId },
    });
    reply.send({
      token: createSessionToken(user),
    });
  });
}
