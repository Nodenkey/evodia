import FilterTypes from "./filter.types";

const INITIAL_STATE = {
    results: [],
    isLoadingResults: false,
    resultsError: '',
    resultsMessage: "",
    filters: {
        sex: [],
        edition: [],
        scent: []
    }
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterTypes.GET_RESULTS_START:
            return {
                ...state,
                isLoadingResults: true,
                resultsError: '',
                resultsMessage: ''
            };

        case FilterTypes.GET_RESULTS_SUCCESS:
            return {
                ...state,
                isLoadingResults: false,
                results: action.payload,
                resultsError: '',
                resultsMessage: "done"
            };

        case FilterTypes.GET_RESULTS_FAILURE:
            return {
                ...state,
                isLoadingResults: false,
                resultsError: action.payload,
                resultsMessage: ''
            };

        case FilterTypes.SET_FILTERS:
            return {
                ...state,
                resultsMessage: "search",
                filters: state.filters[action.payload.category].includes(action.payload.value)
                    ? {
                        ...state.filters,
                        [action.payload.category]: state.filters[action.payload.category].filter(item => item !== action.payload.value)
                    }
                    : {
                        ...state.filters,
                        [action.payload.category]: state.filters[action.payload.category].concat(action.payload.value)
                    }
            };

        default:
            return state;
    }
};

export default filterReducer;
