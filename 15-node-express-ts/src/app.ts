// const express = require('express');
import express, { NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
  res.json({ message: err.message });
});

app.listen(3000);
