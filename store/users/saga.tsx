import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { actionTypes, loadDataSuccess } from './action';
import { UserState } from './interfaces/state.interface';

export default function* saga(): Generator {
    yield takeLatest(
        actionTypes.LOAD_DATA,
        function* loadDataSaga() {
            console.log("saga")
            try {
                const { status, data }: AxiosResponse<UserState[]> = yield call(
                    axios.get,
                    'https://jsonplaceholder.typicode.com/users',
                );

                console.log(data)

                if (status === 200) {
                    yield put(loadDataSuccess(data));
                }
            } catch (err: any) {
                console.log(err)
            }
        }
    );
}
