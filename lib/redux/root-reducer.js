import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import collectionReducer from "./collection/collection.reducer";
import perfumeReducer from "./perfume/perfume.reducer";
import filterReducer from "./filter/filter.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    cart: cartReducer,
    collection: collectionReducer,
    perfume: perfumeReducer,
    filter: filterReducer
});

export default persistReducer(persistConfig, rootReducer);