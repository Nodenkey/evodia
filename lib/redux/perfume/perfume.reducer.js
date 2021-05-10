import PerfumeTypes from "./perfume.types";

const INITIAL_STATE = {
    allPerfumes: [],
    isLoadingAllPerfumes: false,
    allPerfumesError: '',
    specialPerfumes: [],
    isLoadingSpecial:false,
    specialPerfumesError: '',
    perfumeDetails: null,
    isLoadingPerfume: false,
    perfumeError: ''
};

const perfumeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PerfumeTypes.GET_ALL_PERFUMES_START:
            return {
                ...state,
                isLoadingAllPerfumes: true,
                allPerfumesError: ''
            };

        case PerfumeTypes.GET_ALL_PERFUMES_SUCCESS:
            return {
                ...state,
                isLoadingAllPerfumes: false,
                allPerfumesError: '',
                allPerfumes: action.payload
            };

        case PerfumeTypes.GET_ALL_PERFUMES_FAILURE:
            return {
                ...state,
                isLoadingAllPerfumes: false,
                allPerfumesError: action.payload
            };

        case PerfumeTypes.GET_SPECIAL_START:
            return {
                ...state,
                isLoadingSpecial: true,
                specialPerfumesError: ''
            };

        case PerfumeTypes.GET_SPECIAL_SUCCESS:
            return {
                ...state,
                isLoadingSpecial: false,
                specialPerfumesError: '',
                specialPerfumes: action.payload
            };

        case PerfumeTypes.GET_SPECIAL_FAILURE:
            return {
                ...state,
                isLoadingSpecial: false,
                specialPerfumesError: action.payload
            };

        case PerfumeTypes.GET_PERFUME_DETAILS_START:
            return {
                ...state,
                isLoadingPerfume: true,
                perfumeError: ''
            };

        case PerfumeTypes.GET_PERFUME_DETAILS_SUCCESS:
            return {
                ...state,
                isLoadingPerfume: false,
                perfumeError: '',
                perfumeDetails: action.payload
            };

        case PerfumeTypes.GET_PERFUME_DETAILS_FAILURE:
            return {
                ...state,
                isLoadingPerfume: false,
                perfumeError: action.payload
            };

        default:
            return state;
    }
};

export default perfumeReducer;