import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const nullSession = {
  currentUser: null
};

export default (state = nullSession, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, currentUser: action.user };
    case LOGOUT_CURRENT_USER:
      return { ...nullSession };
    default:
      return state;
  }
}