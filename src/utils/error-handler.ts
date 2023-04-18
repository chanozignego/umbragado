import { FastifyRequest, FastifyReply } from 'fastify';

import { HandlerError } from '../errors';

export function errorHandler(
  err: Error,
  request: FastifyRequest,
  reply: FastifyReply
) {
  request.log.error('Error thrown in handler for %s', request.url);
  if (err instanceof HandlerError) {
    reply.status(err.status).send({ error: err.message });
  } else {
    reply.status(500).send({ error: err.message });
  }
}
