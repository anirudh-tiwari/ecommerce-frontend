import {
    FETCH_Product_REQUEST,
    FETCH_Product_SUCCESS,
    FETCH_Product_FAILURE,
    REMOVE_FROM_CART,
    EMPTY_CART,
    ADD_QUANTITY,
    SUB_QUANTITY
} from "./productTypes"

export const fetchProductRequest = () => {
    return {
        type: FETCH_Product_REQUEST
    }
}

export const fetchProductSuccess = product => {
    return {
        type: FETCH_Product_SUCCESS,
        payload: product
    }
}

export const fetchProductFailure = error => {
    return {
        type: FETCH_Product_FAILURE,
        payload: error
    }
}
export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};
export const subtractQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
export const addQuantity = id => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};

export const fetchProduct = (id) => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        fetch(`http://192.168.1.6:8000/product/view?ID=${id}`)
            .then(data => data.json()).then(response => {
                const product = response
                dispatch(fetchProductSuccess(product))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(FETCH_Product_FAILURE(errorMsg))
            })
    }
}