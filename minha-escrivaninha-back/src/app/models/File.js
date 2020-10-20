import Sequelize, { Model } from 'sequelize';

class File extends Model {
  /* Chamada automática do sequelize */
  static init(sequelize) {
    /* 1º Objeto -> Colunas da base de dados que serão registradas pelo usuário*/
    /* 2º Objeto -> Passar o próprio sequelize, que acaba sendo uma forma de configuração*/
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
