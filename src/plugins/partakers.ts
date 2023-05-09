import { FastifyInstance } from 'fastify';
import { GetPartaker, CreatePartaker, UpdatePartaker, DeletePartaker } from '../schemas/partakers';
import { partakerService } from '../services/partaker';

const relations = ['school', 'professor', 'professor.personal_data', 'personal_data', 'personal_data.location', 'medical_data'];

export default async function (app: FastifyInstance) {
  app.get('/api/partakers', async (request, reply) => {
    const partakers = await partakerService.find(relations);
    reply.send(partakers);
  });

  app.get<GetPartaker>('/api/partakers/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    const partaker = await partakerService.getById(id, relations);
    reply.send(partaker);
  });

  app.post<CreatePartaker>('/api/partakers', async (request, reply) => {
    try {
      const payload = request.body;
      const partaker = await partakerService.create(payload);
      reply.status(201).send(partaker);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.put<UpdatePartaker>('/api/partakers/:id', async (request, reply) => {
    try {
      const id = parseInt(request.params.id, 10);
      const payload = request.body;
      const partaker = await partakerService.update(id, payload);
      reply.send(partaker);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.delete<DeletePartaker>('/api/partakers/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    await partakerService.deleteById(id);
    reply.status(204).send();
  });
}
