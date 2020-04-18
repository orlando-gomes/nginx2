import { Router } from 'express';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

import 'dotenv/config';

const routs = new Router();

routs.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routs.get(
  `${process.env.NODE_ENV === 'production' ? process.env.MS : ''}/`,
  (req, res) => {
    return res.json({ msg: 'Hello world nginx2' });
  }
);

routs.get(
  `${process.env.NODE_ENV === 'production' ? process.env.MS : ''}/users`,
  (req, res) => {
    return res.json({ msg: 'get users nginx2' });
  }
);

export default routs;
