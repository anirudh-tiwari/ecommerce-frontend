import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = (id) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        fetch(`http://localhost:8000/product/view?ID=${id}`)
            .then(data => data.json()).then(response => {
                const users = response
                dispatch(fetchUsersSuccess(users))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(FETCH_USERS_FAILURE(errorMsg))
            })
    }
}