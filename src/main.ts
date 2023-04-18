import 'reflect-metadata';
import fastify from 'fastify';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import multipart from 'fastify-multipart';

import config from './config';
import db from './db';
import { plugins } from './plugins';
import { notFoundHandler } from './utils/not-found-handler';
import { errorHandler } from './utils/error-handler';

async function start() {
  await db.connect();

  const app = fastify({ logger: true });

  app.setNotFoundHandler(notFoundHandler);
  app.setErrorHandler(errorHandler);

  await app.register(cookie);
  await app.register(cors);
  await app.register(multipart);

  for (let plugin of plugins) {
    await app.register(plugin);
  }

  await app.listen(config.server.port, '0.0.0.0');
}

start().catch(console.error);
