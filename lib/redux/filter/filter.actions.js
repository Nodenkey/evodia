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

export const setFilters = (category, value) => ({
    type: FilterTypes.SET_FILTERS,
    payload: {category, value}
});

export const clearFilters = () => ({
    type: FilterTypes.CLEAR_FILTERS
});