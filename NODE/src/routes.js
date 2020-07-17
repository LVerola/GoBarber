import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Luis Gabriel',
    email: 'luisgabriel.verola@gmail.com',
    password_hash: '12364616548',
  });

  return res.json(user);
});

export default routes;
