import { call, put, takeLatest } from "redux-saga/effects";

import * as actions from "../actions";
import * as types from '../constants/ActionTypes'
import { api } from '../../services'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getSLPlatsuppslag() {
  try {
    // do api call
    //const data = yield call(api.fetchStations);
    //yield put(actions.receivedStartStations(data));
  } catch (e) {
    console.log(e);
  }
}



export function* watchStationSaga() {
  yield takeLatest(types.REQUEST_START_STATIONS, getSLPlatsuppslag);

}