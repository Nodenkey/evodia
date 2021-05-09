import {createSelector} from "reselect";

const selectCollection = state => state.collection;

export const selectCollectionItems = createSelector(
    [selectCollection],
    collection => collection.collectionItems
);

export const selectCollectionIsLoading = createSelector(
    [selectCollection],
    collection => collection.isLoadingCollection
);

export const selectCollectionError = createSelector(
    [selectCollection],
    collection => collection.collectionError
);