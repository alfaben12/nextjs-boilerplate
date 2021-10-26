import {
  AuthenticationState, SET_AUTHENTICATION, SET_AUTHENTICATION_TOKEN, SET_AUTHENTICATION_USER,
} from './type';

const initialState: AuthenticationState = {
  isAuth: false,
  jwt: null,
  user: {
    email: null,
    name: null,
  },
};

// Creating my reducer
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return { ...state, isAuth: action.payload };
    case SET_AUTHENTICATION_TOKEN:
      return { ...state, jwt: action.payload };
    case SET_AUTHENTICATION_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
