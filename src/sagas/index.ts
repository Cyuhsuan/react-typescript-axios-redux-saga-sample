import { put, call, takeLatest } from "redux-saga/effects";
import Ajax from "../utils/ajax";
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

export default function* rootSaga() {
  yield takeLatest(SAGA_ACTION.SEARCH, fetchData);
  yield takeLatest(SAGA_ACTION.CREATE, createData);
  yield takeLatest(SAGA_ACTION.UPDATE, updateData);
  yield takeLatest(SAGA_ACTION.DELETE, deleteData);
}
