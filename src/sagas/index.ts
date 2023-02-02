import { all } from "redux-saga/effects";
import authFlow from "./auth";

export default function* rootSaga() {
  yield all([authFlow()]);
}
