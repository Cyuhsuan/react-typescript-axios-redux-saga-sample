import { put, takeLatest, call } from "redux-saga/effects";
import { AUTH_STATE } from "../reducers/auth";
import { IAction } from "../actions";
import { ILoginForm } from "../views/LoginPage";
import AuthService, {
  TAuth,
  TAccountInfo,
} from "../utils/ajax/api/authService";

export enum AUTH_ACTION {
  LOGIN = "login",
  LOGOUT = "logout",
}

interface IAuthAction extends IAction {
  type: AUTH_ACTION;
  payload: ILoginForm;
}

/**
 * 進行登入
 * @param {IAuthAction} action
 */
function* login(action: IAuthAction) {
  const res: TAuth & TAccountInfo = yield call(() =>
    AuthService.login(action.payload)
  );
  yield put({ type: AUTH_STATE.LOGIN_SUCCESS, payload: res });
}

/**
 * 進行登出
 */
function* logout() {
  yield call(() => AuthService.logout());
  yield put({ type: AUTH_STATE.LOGOUT_SUCCESS });
}

export default function* authFlow() {
  yield takeLatest(AUTH_ACTION.LOGIN, login);
  yield takeLatest(AUTH_ACTION.LOGOUT, logout);
}
