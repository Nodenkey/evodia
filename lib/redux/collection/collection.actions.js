import CollectionTypes from "./collection.types";

export const getCollectionStart = collectionName => ({
    type: CollectionTypes.GET_COLLECTION_START,
    payload: collectionName
});

export const getCollectionSuccess = collectionItems => ({
    type: CollectionTypes.GET_COLLECTION_SUCCESS,
    payload: collectionItems
});

export const getCollectionFailure = error => ({
    type: CollectionTypes.GET_COLLECTION_FAILURE,
    payload: error
});