import {combineReducers} from "redux";
import cartReducer from "./cart/cart.reducer";
import collectionReducer from "./collection/collection.reducer";
import perfumeReducer from "./perfume/perfume.reducer";
import filterReducer from "./filter/filter.reducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    collection: collectionReducer,
    perfume: perfumeReducer,
    filter: filterReducer
});

export default rootReducer;