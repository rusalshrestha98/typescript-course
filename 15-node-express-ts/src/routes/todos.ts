// default express way
// const express = require('express');
// const Router = express.Router;

// new TypeScript way
import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
