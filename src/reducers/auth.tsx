import { IAction } from "../actions";
import { TAuth, TAccountInfo } from "../utils/ajax/api/authService";

const initState: TAuth & TAccountInfo = {
    token: null,
    id: 0,
    email: "",
    account: ""
}

export enum AUTH_STATE {
    LOGIN_SUCCESS = "login_success",
    LOGIN_FAIL = "login_fail",
    LOGOUT_SUCCESS = "logout_success",
    LOGOUT_FAIL = "logout_fail",
}

export interface IAuthAction extends IAction {
    type: AUTH_STATE;
    payload: TAuth & TAccountInfo
}

export const auth = (
    state: TAuth = initState,
    action: IAuthAction
) => {
    switch (action.type) {
        case AUTH_STATE.LOGIN_SUCCESS:
            return (state = action.payload);
        case AUTH_STATE.LOGOUT_SUCCESS:
        case AUTH_STATE.LOGOUT_FAIL:
        case AUTH_STATE.LOGIN_FAIL:
            return (state = initState);
        default:
            return state;
    }
};
