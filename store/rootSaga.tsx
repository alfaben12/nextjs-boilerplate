import { all, spawn } from "redux-saga/effects";
import userSaga from './users/saga'

export default function* rootSaga(): Generator {
    yield spawn(
        userSaga
    );
}