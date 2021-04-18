import {
    FETCH_Product_REQUEST,
    FETCH_Product_SUCCESS,
    FETCH_Product_FAILURE,
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

export const fetchProduct = (id) => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        fetch(`http://localhost:8000/product/view?ID=${id}`)
            .then(data => data.json()).then(response => {
                const product = response
                dispatch(fetchProductSuccess(product))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(FETCH_Product_FAILURE(errorMsg))
            })
    }
}