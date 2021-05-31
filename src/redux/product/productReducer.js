import {
    FETCH_Product_REQUEST,
    FETCH_Product_SUCCESS,
    FETCH_Product_FAILURE,
    REMOVE_FROM_CART,
    EMPTY_CART,
    ADD_QUANTITY,
    SUB_QUANTITY
} from "./productTypes"

const initialState = {
    loading: false,
    product: [],
    error: '',
    hasData: false
};

const productReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case FETCH_Product_REQUEST:
            return {  
                ...state,
                loading: true
            }
        case FETCH_Product_SUCCESS:
            return {
                loading: false,
                product: [...state.product, ...payload], 
                error: '',
                hasData: true
            }
        case ADD_QUANTITY:                  
            return {                    
                ...state,
                product: state.product.map(products =>
                    products.ID === action.id
                        ? { ...products, QUANTITY: products.QUANTITY + 1, actualPrice: (products.QUANTITY + 1) * products.DISCOUNT_PRICE }
                        : products,
                )
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                product: state.product.filter(products =>      
                    products.ID !== action.id
                )
            };
        case SUB_QUANTITY:
            return {
                ...state,
                product: state.product.map(products =>
                    products.ID === action.id
                        ? {
                            ...products,
                            QUANTITY: products.QUANTITY !== 1 ? products.QUANTITY - 1 : 1,
                            actualPrice: products.DISCOUNT_PRICE !== products.actualPrice ? (products.QUANTITY - 1) * products.DISCOUNT_PRICE : products.DISCOUNT_PRICE 
                        }                        
                        : products,
                ),
            };
        case EMPTY_CART:
            return {
                ...state,
                product: state.product.filter(products =>
                    products.ID === 0
                )
            };
        case FETCH_Product_FAILURE:
            return {
                loading: false,
                product: [],
                error: payload
            }
        default: return state  
    }
}

export default productReducer;
