import { DeepPartial, EntityTarget, FindManyOptions, FindOneOptions } from 'typeorm';

import database from '../db';
import { NotFoundError } from '../errors';

export abstract class EntityService<T> {
  constructor(private entityClass: EntityTarget<T>) {}

  find(relations?: string[]) {
    if (relations && relations.length > 0) {
      return this.repository.find({ relations });
    }
    return this.repository.find();
  }

  findBy(options: FindManyOptions<T>) {
    return this.repository.find(options);
  }

  async getById(id: number, relations?: string[]) {
    const entity = await this.repository.findOne(id, {relations: relations});
    if (!entity) {
      throw new NotFoundError('Entity not found matching the criteria');
    }
    return entity;
  }

  async findOneBy(options: FindOneOptions<T>) {
    const entity = await this.repository.findOne(options);
    if (!entity) {
      throw new NotFoundError('Entity not found matching the criteria');
    }
    return entity;
  }

  async findOneOrNullBy(options: FindOneOptions<T>) {
    const entity = await this.repository.findOne(options);
    return entity || null;
  }

  async create(payload: DeepPartial<T>) {
    // const entity = this.repository.create(payload);
    return await this.repository.save(payload);
  }

  async createMany(payloads: DeepPartial<T>[]) {
    // const entities = this.repository.create(payloads);
    return await this.repository.save(payloads);
  }

  async update(id: number, payload: any) {
    const entity = await this.repository.findOne(id);
    if (!entity) {
      throw new NotFoundError('Entity not found matching the criteria');
    }
    payload.id = id;
    return await this.repository.save(payload);
  }

  async deleteById(id: number) {
    const result = await this.repository.delete(id);
    if (!result.affected) {
      throw new NotFoundError(`Entity with id ${id} not found`);
    }
  }

  get repository() {
    return database.connection.getRepository(this.entityClass);
  }
}
