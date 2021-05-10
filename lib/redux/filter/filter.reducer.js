import FilterTypes from "./filter.types";

const INITIAL_STATE = {
    results: [],
    isLoadingResults: false,
    resultsError: ''
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterTypes.GET_RESULTS_START:
            return {
                ...state,
                isLoadingResults: true,
                resultsError: ''
            };

        case FilterTypes.GET_RESULTS_SUCCESS:
            return {
                ...state,
                isLoadingResults: false,
                results: action.payload,
                resultsError: ''
            };

        case FilterTypes.GET_RESULTS_FAILURE:
            return {
                ...state,
                isLoadingResults: false,
                resultsError: action.payload
            };

        default:
            return state;
    }
};

export default filterReducer;
