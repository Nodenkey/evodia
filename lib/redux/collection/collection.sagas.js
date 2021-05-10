import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";
import CollectionTypes from "./collection.types";
import {getCollectionFailure, getCollectionSuccess} from "./collection.actions";

const baseUrl = 'https://evodia-server-v2.vercel.app/api/collections';
const bearer = `bearer ${process.env.NEXT_PUBLIC_TOKEN}`;

function* getCollection({payload}) {
    try {
        const collection = yield axios.get(`${baseUrl}/${payload}`, {
            headers: { Authorization: bearer }
        });

        yield put(getCollectionSuccess(collection.data));
    } catch (e) {
        yield getCollectionFailure(e.message);
    }
}

function* onGetCollectionStart() {
    yield takeLatest(CollectionTypes.GET_COLLECTION_START, getCollection);
}

export default function* collectionSagas() {
    yield all([
        call(onGetCollectionStart)
    ]);
}