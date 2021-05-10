import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";
import PerfumeTypes from "./perfume.types";
import {
    getAllPerfumesFailure,
    getAllPerfumesSuccess,
    getPerfumeDetailsFailure,
    getPerfumeDetailsSuccess
} from "./perfume.actions";

const baseUrl = 'https://evodia-server-v2.vercel.app/api/perfumes';
const bearer = `bearer ${process.env.NEXT_PUBLIC_TOKEN}`;

function* getAllPerfumes() {
    try {
        const perfumes = yield axios.get(baseUrl, {
            headers: { Authorization: bearer }
        });

        yield put(getAllPerfumesSuccess(perfumes.data));
    } catch (e) {
        yield put(getAllPerfumesFailure(e.message));
    }
}

function* onGetAllPerfumesStart() {
    yield takeLatest(PerfumeTypes.GET_ALL_PERFUMES_START, getAllPerfumes);
}

function* getPerfumeDetails({payload}) {
    try {
        const perfume = yield axios.get(`${baseUrl}/${payload}`, {
            headers: { Authorization: bearer }
        });

        yield put(getPerfumeDetailsSuccess(perfume.data));
    } catch (e) {
        yield put(getPerfumeDetailsFailure(e.message));
    }
}

function* onGetPerfumeDetailsStart() {
    yield takeLatest(PerfumeTypes.GET_PERFUME_DETAILS_START, getPerfumeDetails);
}

export default function* perfumeSagas() {
    yield all([
        call(onGetAllPerfumesStart),
        call(onGetPerfumeDetailsStart)
    ]);
}