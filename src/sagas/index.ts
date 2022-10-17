import { put, all, call, takeLatest } from "redux-saga/effects";
import Ajax from "../ajax";
import { API_ACTION, SAGA_ACTION } from "../actions";

function* createData(action: any) {
  let data = null;
  yield call(() => {
    Ajax.post("", action.params).then((res: any) => {
      data = res.data;
    });
  });
  yield put({ type: API_ACTION.CREATE, data: data });
}

function* updateData(action: any) {
  let data = null;
  yield call(() => {
    Ajax.put("", action.params).then((res: any) => {
      data = res.data;
    });
  });
  yield put({ type: API_ACTION.UPDATE, data: data });
}

function* deleteData(action: any) {
  let data = null;
  yield call(() => {
    Ajax.delete("", action.params).then((res: any) => {
      data = res.data;
    });
  });
  yield put({ type: API_ACTION.DELETE, data: data });
}

function* fetchData(action: any) {
  let data = null;
  yield call(() => {
    Ajax.get("", action.params).then((res: any) => {
      data = res.data;
    });
  });
  yield put({ type: API_ACTION.SEARCH, data: data });
}

function* watchCreate() {
  yield takeLatest(SAGA_ACTION.CREATE, createData);
}

function* watchUpdate() {
  yield takeLatest(SAGA_ACTION.UPDATE, updateData);
}

function* watchDelete() {
  yield takeLatest(SAGA_ACTION.DELETE, deleteData);
}

function* watchSearch() {
  yield takeLatest(SAGA_ACTION.SEARCH, fetchData);
}

export default function* rootSaga() {
  yield all([watchCreate(), watchUpdate(), watchDelete(), watchSearch()]);
}
