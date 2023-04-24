import { FastifyInstance } from 'fastify';

import { userService } from '../services/user';
import { REFRESH_TOKEN_COOKIE } from '../utils/auth';
import { encryptPassword } from '../utils/security';
import {
  DeleteUser,
  AuthUser,
  CreateUser,
  UpdateUser,
  GetUser,
} from '../schemas/users';

export default async function (app: FastifyInstance) {
  app.get('/api/users', async (request, reply) => {
    const users = await userService.find();
    reply.send(users);
  });

  app.get<GetUser>('/api/users/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    const user = await userService.getById(id);
    reply.send(user);
  });

  app.post<CreateUser>('/api/users', async (request, reply) => {
    try {
      const payload = request.body;
      payload.password = await encryptPassword(payload.password);
      const user = await userService.create(payload);
      reply.status(201).send(user);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.put<UpdateUser>('/api/users/:id', async (request, reply) => {
    try {
      const id = parseInt(request.params.id, 10);
      const payload = request.body;
      if (payload.password) {
        payload.password = await encryptPassword(payload.password);
      }
      const user = await userService.update(id, payload);
      reply.send(user);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.delete<DeleteUser>('/api/users/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    await userService.deleteById(id);
    reply.status(204).send();
  });

  app.post<AuthUser>('/api/users/auth', async (request, reply) => {
    const payload = request.body;
    payload.password = await encryptPassword(payload.password);
    const user = await userService.findOneBy({
      where: {
        email: payload.email,
        password: payload.password,
      },
    });
    const { sessionToken, refreshToken } = await userService.createTokens(user);
    reply.setCookie(REFRESH_TOKEN_COOKIE, refreshToken, {
      httpOnly: true,
      path: '/api',
    });
    reply.send({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: sessionToken,
    });
  });
}
