import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import type { Request, Response } from 'express';
import { isEmpty } from 'lodash';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = 4000;

let data = {};

app.get('/', (req: Request, res: Response) => {
  res.send(data);
});

app.post('/overview', (req: Request, res: Response) => {
  const {
    title,
    category,
    asset,
    ...rest
  } = req.body;
  if (!isEmpty(rest)) {
    res.status(400).send('Wrong input');
  }
  if (asset) {
    res.status(400).send('Server error');
  }
  data = {
    ...data,
    title,
    category,
    asset,
  };
  res.send(data);
});

app.post('/details', (req: Request, res: Response) => {
  const {
    comment,
    risk,
    quantity,
    deadline,
    impact,
    execProbability,
    severity,
    ...rest
  } = req.body;
  if (!isEmpty(rest)) {
    res.status(400).send('Server error');
  }
  if (deadline > Date.now() + 4 * 60 * 60 * 24 * 1000) {
    res.status(500).send('Wrong input');
  }
  data = {
    ...data,
    comment,
    risk,
    quantity,
    deadline,
    impact,
    execProbability,
    severity,
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export {};
