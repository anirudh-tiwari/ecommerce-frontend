import {
    FETCH_Product_REQUEST,
    FETCH_Product_SUCCESS,
    FETCH_Product_FAILURE,
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
            var cartItem = {
                quantity: 1,
                price: payload.DISCOUNT_PRICE,
                productId: payload.ID,
                product: payload
            }
            return {
                loading: false,
                product: [...state.product, cartItem],
                error: ''
            }
        case ADD_QUANTITY:
            return {
                ...state,
                product: state.product.map(products =>
                    products.product.ID === action.id
                        ? { ...products, quantity: products.quantity + 1, price: (products.quantity + 1) * products.product.DISCOUNT_PRICE }
                        : products,
                ),
            };
        case SUB_QUANTITY:
            return {
                ...state,
                product: state.product.map(products =>
                    products.product.ID === action.id
                        ? {
                            ...products,
                            quantity: products.quantity !== 1 ? products.quantity - 1 : 1,
                            price: (products.quantity - 1) * products.price
                        }
                        : products,
                ),
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
