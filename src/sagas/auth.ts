import { put, takeLatest, call } from "redux-saga/effects";
import { IAuthAction, AUTH_ACTION, TAuth } from "../reducers/auth";
import AjaxService from "../utils/ajax";
import { ILoginForm } from "../views/LoginPage";

export enum AUTH_DO {
  LOGIN = "do_login",
  LOGOUT = "do_logout",
}

export enum AUTH_ROUTE {
  LOGIN = "/api/login",
  LOGOUT = "/logout",
}
/**
 * 進行登入
 * @param {IAuthAction} action
 */
function* login(action: { type: string; payload: ILoginForm }) {
  const token: string = yield call(async () => {
    return await AjaxService.post(
      `${process.env.REACT_APP_URL}${AUTH_ROUTE.LOGIN}`,
      action.payload
    ).then((res) => {
      return res.data.token;
    });
  });
  yield put({ type: AUTH_ACTION.LOGIN, payload: { token: token } });
}

/**
 * 進行登出
 * @param {IAuthAction} action
 */
function* logout(action: IAuthAction) {
  const data: void = yield call(async () => {
    return await AjaxService.post(AUTH_ROUTE.LOGIN, action.payload);
  });
  yield put({ type: AUTH_ACTION.LOGOUT, payload: data });
}

export default function* authFlow() {
  yield takeLatest(AUTH_DO.LOGIN, login);
  yield takeLatest(AUTH_DO.LOGOUT, logout);
}
