import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";
import FilterTypes from "./filter.types";
import {getResultsFailure, getResultsSuccess} from "./filter.actions";

const baseUrl = 'https://evodia-server-v2.vercel.app/api/search';
const bearer = `bearer ${process.env.NEXT_PUBLIC_TOKEN}`;

function* getResults({payload}) {
    try {
        const results = yield axios.post(baseUrl, payload, {
            headers: {Authorization: bearer}
        });
        
        yield put(getResultsSuccess(results.data));
    } catch (e) {
        yield put(getResultsFailure(e.message));
    }
}

function* onGetResultsStart() {
    yield takeLatest(FilterTypes.GET_RESULTS_START, getResults);
}

export default function* filterSagas() {
    yield all([
        call(onGetResultsStart)
    ]);
}