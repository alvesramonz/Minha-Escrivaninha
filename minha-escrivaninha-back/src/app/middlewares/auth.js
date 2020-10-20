import jwt from 'jsonwebtoken';
import { promisify } from 'util'; /* Apenas para o jwt.verify por questões assincronas */

import authConfig from '../../config/auth';

/* Verificação se o usuário está logado */
export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  /* Se parar aqui simplesmente o token não foi recebido e não é possível progredir */
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não enviado!' });
  }

  /* Desestruturação do Bearer  + token, para apenas o token */
  const [, token] = authHeader.split(' ');

  /* Verificação do token com base no segredo, se estiver tudo ok "next" */
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next(); /* Se chegar até aqui o usuário está autenticado! */
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};
