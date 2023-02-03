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

interface IAuthAction extends IAction {
    type: AUTH_STATE;
    payload: TAuth & TAccountInfo
}

export const auth = (
    state: TAuth & TAccountInfo = initState,
    action: IAuthAction
): TAuth & TAccountInfo => {
    switch (action.type) {
        // 登入成功就寫入使用者token 跟 資料
        case AUTH_STATE.LOGIN_SUCCESS:
            localStorage.setItem('store', JSON.stringify(action.payload))
            return (state = action.payload);
        // 登入失敗 或者 登出 就清除使用者token 跟 資料
        case AUTH_STATE.LOGOUT_SUCCESS:
        case AUTH_STATE.LOGOUT_FAIL:
        case AUTH_STATE.LOGIN_FAIL:
            localStorage.removeItem('store');
            return (state = initState);
        default:
            return JSON.parse(localStorage.getItem('store') ?? JSON.stringify(initState));
    }
};
