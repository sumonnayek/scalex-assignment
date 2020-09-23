import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from "../actions/actionTypes";

const initialState = { authenticated: false };

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...action.payload.userDetails, authenticated: true };
    case LOGOUT_USER:
      return { authenticated: false };
    default:
      return state;
  }
};

export default loginUser;
