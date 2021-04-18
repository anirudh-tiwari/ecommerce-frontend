import { combineReducers } from 'redux';
import cartNumberReducer from './cartNumber/cartNumberReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
    product: productReducer,
    cartNumber: cartNumberReducer,
})

export default rootReducer