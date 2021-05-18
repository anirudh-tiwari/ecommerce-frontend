import React from 'react'
import Navbar from "./Navbar"
import Footer from "./footer"
export default function Layout(props) {
    debugger
    return (
        <div className="test">
        {/* <Navbar/> */}
        <h1>asdasd</h1>
        {props.children}
         {/* <Footer/>    */}
        </div>
    )
}
