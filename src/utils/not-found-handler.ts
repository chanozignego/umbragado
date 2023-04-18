import { FastifyRequest, FastifyReply } from 'fastify';

export function notFoundHandler(request: FastifyRequest, reply: FastifyReply) {
  request.log.error('URL $s not found', request.url);
  reply.status(404).send({ error: 'Route not found' });
}
