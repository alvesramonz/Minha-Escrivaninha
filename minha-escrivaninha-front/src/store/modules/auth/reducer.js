const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case '@auth/USER_LOGGED_IN':
      return action.user;
    default:
      return state;
  }
}
