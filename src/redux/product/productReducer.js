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
    error: ''
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
            var ani=payload
            debugger
            return {
                loading: false,
                product: [...state.product, ...payload],
                error: ''
            }
        // case FETCH_Product_SUCCESS:
        //     debugger
        //     var cartItem = {
        //         quantity: payload.QUANTITY,
        //         price: payload.DISCOUNT_PRICE,
        //         productId: payload.ID,
        //         product: payload
        //     }
        //     debugger
        //     return {
        //         loading: false,
        //         product: [...state.product, cartItem],
        //         error: ''
        //     }
        case ADD_QUANTITY:                                                                                               
            return {                    
                ...state,
                product: state.product.map(products =>
                    products.ID === action.id
                        ? { ...products, QUANTITY: products.QUANTITY + 1, DISCOUNT_PRICE: (products.QUANTITY + 1) * products.actualPrice }
                        : products,
                )
                // state.product.map(products =>
                //     products.product.ID === action.id
                //         ? { ...products, quantity: products.quantity + 1, price: (products.quantity + 1) * products.product.DISCOUNT_PRICE }
                //         : products,
                // ),
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                product: state.product.filter(products =>      
                    products.productId !== action.id
                )
            };
        case SUB_QUANTITY:
            return {
                ...state,
                product: state.product.map(products =>
                    products.product.ID === action.id
                        ? {
                            ...products,
                            quantity: products.quantity !== 1 ? products.quantity - 1 : 1,
                            price: products.price !== 0 ? products.product.DISCOUNT_PRICE : (products.quantity - 1) * products.price
                            // price: (products.quantity - 1) * products.price
                        }
                        : products,
                ),
            };
        case EMPTY_CART:
            return {
                ...state,
                product: state.product.filter(products =>
                    products.id === 0
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
