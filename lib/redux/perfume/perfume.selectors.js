import {createSelector} from "reselect";

const selectPerfume = state => state.perfume;

export const selectAllPerfumes = createSelector(
    [selectPerfume],
    perfume => perfume.allPerfumes
);

export const selectIsLoadingAllPerfumes = createSelector(
    [selectPerfume],
    perfume => perfume.isLoadingAllPerfumes
);

export const selectAllPerfumesError = createSelector(
    [selectPerfume],
    perfume => perfume.allPerfumesError
);

export const selectPerfumeDetails = createSelector(
    [selectPerfume],
    perfume => perfume.perfumeDetails
);

export const selectIsLoadingPerfume = createSelector(
    [selectPerfume],
    perfume => perfume.isLoadingPerfume
);

export const selectPerfumeError = createSelector(
    [selectPerfume],
    perfume => perfume.perfumeError
);