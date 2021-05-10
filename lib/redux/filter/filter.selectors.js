import {createSelector} from "reselect";

const selectFilter = state => state.filter;

export const selectResults = createSelector(
    [selectFilter],
    filter => filter.results
)

export const selectIsLoadingResults = createSelector(
    [selectFilter],
    filter => filter.isLoadingResults
);

export const selectResultsError = createSelector(
    [selectFilter],
    filter => filter.resultsError
);