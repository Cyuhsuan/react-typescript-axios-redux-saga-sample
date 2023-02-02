import { IAction } from "../actions";

export type TAuth = {
    token: string | null
}

const initAuth: TAuth = {
    token: null
}

export enum AUTH_ACTION {
    LOGIN = "login",
    LOGOUT = "logout",
}

export interface IAuthAction extends IAction {
    type: AUTH_ACTION;
    payload: TAuth
}

export const auth = (
    state: TAuth = initAuth,
    action: IAuthAction
) => {
    switch (action.type) {
        case AUTH_ACTION.LOGIN:
            return (state = action.payload);
        case AUTH_ACTION.LOGOUT:
            return (state = action.payload);
        default:
            return state;
    }
};
