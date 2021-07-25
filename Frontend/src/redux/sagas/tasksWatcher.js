import { call, put, takeEvery, select } from "redux-saga/effects";
import { addTestFetch, addTestAC } from "../actionCreators/addTestAC";
import { addTitleTestFetch, addTitleTestAC } from "../actionCreators/addTitleTestAC";

import {
  ADD_TEST_SAGA,
  ADD_TEST_TITLE_SAGA
} from '../actionTypes/testTypes';


function* addTestWorker (action) {
  try {
    const test = yield call(addTestFetch, action.payload);
    console.log('Ответ:', test);
    yield put(addTestAC(test));

  } catch (e) {
      yield put({ type: "ERROR", message: e.message });
  }
}

function* addTitleTestWorker (action) {
  try {
    const { test } = yield call(addTitleTestFetch, action.payload);
    console.log('Ответ:', test);
    yield put(addTestAC(test));

  } catch (e) {
      yield put({ type: "ERROR", message: e.message });
  }
}

export function* tasksWatcher() {
  yield takeEvery(ADD_TEST_SAGA, addTestWorker);
  yield takeEvery(ADD_TEST_TITLE_SAGA, addTitleTestWorker);
 
}
