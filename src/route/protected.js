import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../cmp/footer"
import Navbar from "../cmp/Navbar";

function ProtectedRoute(props) {
    console.log(props.cmp)
    let  Cmp = props.cmp
    let history = useHistory();
    // useEffect(() => {
    //     if(!localStorage.getItem("accessToken")){
    //         history.push('/');
    //     }
    // }, [])
    return (
        <>
     <Navbar />
       <Cmp />
     <Footer/>
        </>
    )
}

export default ProtectedRoute
