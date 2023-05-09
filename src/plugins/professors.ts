import { FastifyInstance } from 'fastify';
import { GetProfessor, CreateProfessor, UpdateProfessor, DeleteProfessor } from '../schemas/professors';
import { professorService } from '../services/professor';

const relations = ['personal_data', 'personal_data.location', 'medical_data'];

export default async function (app: FastifyInstance) {
  app.get('/api/professors', async (request, reply) => {
    const professors = await professorService.find(relations);
    reply.send(professors);
  });

  app.get<GetProfessor>('/api/professors/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    const professor = await professorService.getById(id, relations);
    reply.send(professor);
  });

  app.post<CreateProfessor>('/api/professors', async (request, reply) => {
    try {
      const payload = request.body;
      const professor = await professorService.create(payload);
      reply.status(201).send(professor);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.put<UpdateProfessor>('/api/professors/:id', async (request, reply) => {
    try {
      const id = parseInt(request.params.id, 10);
      const payload = request.body;
      const professor = await professorService.update(id, payload);
      reply.send(professor);
    } catch (err) {
      request.log.error(err);
      reply.status(422).send({ error: err });
    }
  });

  app.delete<DeleteProfessor>('/api/professors/:id', async (request, reply) => {
    const id = parseInt(request.params.id, 10);
    await professorService.deleteById(id);
    reply.status(204).send();
  });
}
