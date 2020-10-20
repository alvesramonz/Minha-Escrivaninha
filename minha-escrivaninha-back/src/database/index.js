/* Conexão com o banco de dados e carregamento dos "models" */
import Sequelize from 'sequelize'; /* Responsável pela conexão com os bancos */
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  /* Conexão com o banco e carregamento dos models */
  init() {
    this.connection = new Sequelize(
      databaseConfig
    ); /* Ligando com a base de dados */

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/escrivaninha',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
