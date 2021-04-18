// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUsers } from '../redux/index'

// function User() {
//     const userData = useSelector(state => state.users)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(fetchUsers())
//     }, [])
//     return (
//         userData.loading ? <h1></h1> : userData.error ? <h2>{userData.error}</h2> : (
//             <div>
//                 <h2>User List</h2>
//                 {userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
//             </div>
//         )
//     )
// }

// export default User


import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../redux/index'
function User(props) {
    useEffect(() => {
        props.fetchProduct()
    }, [])
    // return userData.loading ? (<h1>loading</h1>) : userData.error ? (<h2>{userData.error}</h2>) : (
    //     <div>
    //         <h2>User List</h2>
    //         <div>
    //             {userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
    //         </div>
    //     </div>
    // )
    console.log("ani", props.userData)
    return (
        //  props.userData?.loading ? (<h2>Loading</h2>) : (
        <div>
            <h1>User List</h1>
            {/* {props.userData?.map(user => <h2>{user.name}</h2>)} */}
            {props.userData && props.userData?.map(user => <h2>{user.name}</h2>)}
        </div>
    )
    // )
}


const mapStateToProps = state => {
    console.log("asdasd asdasdasd asdasdasd", state)
    return {
        userData: state?.users
    }
}

const mapDispatchToProps = dispatch => {

    return {
        fetchUsers: () => dispatch(fetchProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)


