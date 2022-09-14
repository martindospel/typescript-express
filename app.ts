import express from 'express';
import { Request, Response, Application } from 'express';
import puppies from './db';

const app: Application = express();

app.use(express.json());

app.get('/api/puppies', (_req: Request, res: Response) => {
  return res.json(puppies);
});

app.get('/api/puppies/:id', (req: Request, res: Response) => {
  return res.json(puppies.find(puppy => `${puppy.id}` === req.params.id));
});

app.post('/api/puppies', (req: Request, res: Response) => {
  const puppy = {
    id: puppies.reduce((a, b) => b.id > a.id ? b : a).id + 1,
    breed: req.body.breed,
    name: req.body.name,
    dob: new Date(req.body.dob),
  }
  puppies.push(puppy)
  return res.status(201).json(puppy)
});

app.put("/api/puppies/:id", (req: Request, res: Response) => {
  const puppyIndex = puppies.findIndex(puppy => `${puppy.id}` === req.params.id);
  const { name, dob, breed } = req.body;
  puppies[puppyIndex] = { id: Number(req.params.id), name, dob: new Date(dob), breed };
  return res.json(puppies[puppyIndex]);
});

app.delete('/api/puppies/:id', (req: Request, res: Response) => {
  const puppyIndex = puppies.findIndex(puppy => `${puppy.id}` === req.params.id);
  if (puppyIndex > -1) {
    return res.json(puppies.splice(puppyIndex, 1));
  } else {
    return res.status(404).json({ message: "Not found" });
  }
});

export default app;
