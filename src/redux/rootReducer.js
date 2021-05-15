import { combineReducers } from 'redux';
import productReducer from './product/productReducer'
import snackbarReducer from './snackbar/snackbarReducer';

const rootReducer = combineReducers({
    product: productReducer,
    snackbar : snackbarReducer
})

export default rootReducer