import PerfumeTypes from "./perfume.types";

export const getAllPerfumesStart = () => ({
    type: PerfumeTypes.GET_ALL_PERFUMES_START
});

export const getAllPerfumesSuccess = perfumes => ({
    type: PerfumeTypes.GET_ALL_PERFUMES_SUCCESS,
    payload: perfumes
});

export const getAllPerfumesFailure = error => ({
    type: PerfumeTypes.GET_ALL_PERFUMES_FAILURE,
    payload: error
})

export const getSpecialPerfumesStart = () => ({
    type: PerfumeTypes.GET_SPECIAL_START
});

export const getSpecialPerfumesSuccess = perfumes => ({
    type: PerfumeTypes.GET_SPECIAL_SUCCESS,
    payload: perfumes
});

export const getSpecialPerfumesFailure = error => ({
    type: PerfumeTypes.GET_SPECIAL_FAILURE,
    payload: error
})

export const getPerfumeDetailsStart = perfumeName => ({
    type: PerfumeTypes.GET_PERFUME_DETAILS_START,
    payload: perfumeName
});

export const getPerfumeDetailsSuccess = perfume => ({
    type: PerfumeTypes.GET_PERFUME_DETAILS_SUCCESS,
    payload: perfume
});

export const getPerfumeDetailsFailure = error => ({
    type: PerfumeTypes.GET_PERFUME_DETAILS_FAILURE,
    payload: error
});