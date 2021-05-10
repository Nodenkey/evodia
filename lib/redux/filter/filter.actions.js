import FilterTypes from "./filter.types";

export const getResultsStart = filters => ({
    type: FilterTypes.GET_RESULTS_START,
    payload: filters
});

export const getResultsSuccess = results => ({
    type: FilterTypes.GET_RESULTS_SUCCESS,
    payload: results
});

export const getResultsFailure = error => ({
    type: FilterTypes.GET_RESULTS_FAILURE,
    payload: error
});