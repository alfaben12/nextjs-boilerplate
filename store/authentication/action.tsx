import {
  SET_AUTHENTICATION, SET_AUTHENTICATION_TOKEN, SET_AUTHENTICATION_USER, UserState,
} from './type';

export const setAuthentication = (isAuth: boolean) => (dispatch: any) => dispatch({
  type: SET_AUTHENTICATION,
  payload: isAuth,
});

export const setAuthenticationToken = (token: string) => (dispatch: any) => dispatch({
  type: SET_AUTHENTICATION_TOKEN,
  payload: token,
});

export const setAuthenticationUser = (user: UserState) => (dispatch: any) => dispatch({
  type: SET_AUTHENTICATION_USER,
  payload: user,
});
