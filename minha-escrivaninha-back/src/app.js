/**
 * Ps.Classes fazem sentido no back
 * 01.Adicionar 'Import from'
 */

import 'dotenv/config';

import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json()); /* Possivel requisição e retorno Json */
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes); /* Rotas */
  }
}

export default new App().server;
