import { FastifyInstance } from 'fastify';
import { GetInscription, CreateInscription, UpdateInscription, DeleteInscription } from '../schemas/inscriptions';
import { inscriptionService } from '../services/inscription';

const relations = ['school', 'professor', 'professor.personal_data', 'partaker', 'partaker.personal_data'];

export default async function (app: FastifyInstance) {
  app.get('/api/inscriptions', async (request, reply) => {
    const inscriptions = await inscriptionService.find(relations);
    reply.send(inscriptions);
  });

  app.get<GetInscription>('/api/inscriptions/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    const inscription = await inscriptionService.getById(id, relations);
    reply.send(inscription);
  });

  app.post<CreateInscription>('/api/inscriptions', async (request, reply) => {
    try {
      const payload = request.body;
      const inscription = await inscriptionService.create(payload);
      reply.status(201).send(inscription);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.put<UpdateInscription>('/api/inscriptions/:id', async (request, reply) => {
    try {
      const id = parseInt(request.params.id, 10);
      const payload = request.body;
      const inscription = await inscriptionService.update(id, payload);
      reply.send(inscription);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.delete<DeleteInscription>('/api/inscriptions/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    await inscriptionService.deleteById(id);
    reply.status(204).send();
  });
}
