import { response, Router } from 'express';
import { request } from 'http';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response)=>{
  try{
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message ;>>', err.message);
  }
});

classRouter.get('/', async (request, response) =>{
  response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

/*classRouter.get('/:name', async(request, response) =>{
  const repository = getRepository(Class);
  const res = await repository.find({

    where: {
      name: request.params.name,
    },

  });
  response.json(res);
});*/

export default classRouter;
