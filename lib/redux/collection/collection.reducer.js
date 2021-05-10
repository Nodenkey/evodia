import CollectionTypes from "./collection.types";

const INITIAL_STATE = {
    collectionItems: null,
    isLoadingCollection: false,
    collectionError: ''
};

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CollectionTypes.GET_COLLECTION_START:
            return {
                ...state,
                isLoadingCollection: true,
                collectionError: ''
            };

        case CollectionTypes.GET_COLLECTION_SUCCESS:
            return {
                ...state,
                isLoadingCollection: false,
                collectionItems: action.payload
            };

        case CollectionTypes.GET_COLLECTION_FAILURE:
            return {
                ...state,
                isLoadingCollection: false,
                collectionError: action.payload
            };

        default:
            return state;
    }
};

export default collectionReducer;