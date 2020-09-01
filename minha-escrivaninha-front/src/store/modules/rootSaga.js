import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}

/**
 * Responsável por juntar todos os Sagas do projeto, "all"
 */
