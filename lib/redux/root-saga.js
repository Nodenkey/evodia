import {all, call} from "redux-saga/effects";
import collectionSagas from "./collection/collection.sagas";
import perfumeSagas from "./perfume/perfume.sagas";

export default function* rootSaga() {
    yield all([
        call(collectionSagas),
        call(perfumeSagas)
    ]);
}