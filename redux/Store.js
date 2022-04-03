import {CategoryListReducer} from './reducers/CategorgyListReducer';
import {ItemListReducer} from "./reducers/ItemListReducer";
import {CartReducer} from "./reducers/CartReducer";
import {AccountTotalReducer,AccountFavReducer,AccountOrdersReducer} from "./reducers/AccountReducers"
import {createStore ,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const initialState={};
const reducer=combineReducers({
    CategoryList:CategoryListReducer,
    ItemList:ItemListReducer,
    TotalPayment:AccountTotalReducer,
    GetFav:AccountFavReducer,
    GetOrders:AccountOrdersReducer,
    GetCart:CartReducer
})
const store =createStore(reducer,initialState,applyMiddleware(thunk));
export default store;