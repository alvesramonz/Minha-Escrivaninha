import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({ auth });

/**
 * Responsável por juntar todos os Reducers do projeto, "combineReducers"
 */
