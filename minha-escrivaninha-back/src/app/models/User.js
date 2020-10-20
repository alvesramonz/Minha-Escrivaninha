import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  /* Chamada automática do sequelize */
  static init(sequelize) {
    /* 1º Objeto -> Colunas da base de dados que serão registradas pelo usuário*/
    /* 2º Objeto -> Passar o próprio sequelize, que acaba sendo uma forma de configuração*/
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password:
          Sequelize.VIRTUAL /* Um campo que só existirá no lado do código */,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    /* Trechos de códigos que são acionados automaticamente com base em
    ações que ocorrem nos models  */
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  /* Função comparadora de senha do próprio bcrypt */
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
