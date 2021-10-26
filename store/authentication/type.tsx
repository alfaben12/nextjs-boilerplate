export interface UserState {
    email: string | null,
    name: string | null,
}

export interface AuthenticationState {
    isAuth: boolean,
    jwt: string | null,
    user: UserState,
}

export const SET_AUTHENTICATION = 'setAuthentication';
export const SET_AUTHENTICATION_USER = 'setAuthenticationUser';
export const SET_AUTHENTICATION_TOKEN = 'setAuthenticationToken';
