import { FastifyInstance } from 'fastify';
import { GetSchool, CreateSchool, UpdateSchool, DeleteSchool } from '../schemas/schools';
import { schoolService } from '../services/school';


export default async function (app: FastifyInstance) {
  app.get('/api/schools', async (request, reply) => {
    const schools = await schoolService.find(['location']);
    reply.send(schools);
  });

  app.get<GetSchool>('/api/schools/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    const school = await schoolService.getById(id, ['location']);
    reply.send(school);
  });

  app.post<CreateSchool>('/api/schools', async (request, reply) => {
    try {
      const payload = request.body;
      const school = await schoolService.create(payload);
      reply.status(201).send(school);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.put<UpdateSchool>('/api/schools/:id', async (request, reply) => {
    try {
      const id = parseInt(request.params.id, 10);
      const payload = request.body;
      const school = await schoolService.update(id, payload);
      reply.send(school);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.delete<DeleteSchool>('/api/schools/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    await schoolService.deleteById(id);
    reply.status(204).send();
  });
}
