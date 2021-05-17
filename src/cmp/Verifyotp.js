import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "./Popup";

const Verifyotp = () => {
    const [popupGreenState, setPopupGreenState] = useState(false);
    const [messageGreenState, setMessageGreenState] = useState("");
    const [popupRedState, setPopupRedState] = useState(false);
    const [messageRedState, setMessageRedState] = useState("");
    const [otp, setOtp] = useState("");
    const [mobile_number, setMobile_number] = useState("");
    const [hash, setHash] = useState("");
    const history = useHistory();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            mobile_number,
            hash,
            otp,
        };
        fetch('http://192.168.1.14:8000/otp/verify', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                if(resp.verification){
                    setPopupGreenState(true);
                    setMessageGreenState("Verfied OTP");
                    history.push("/product");
                }else if (resp.verification==false) {
                    setPopupRedState(true);
                    setMessageRedState("Incorrect OTP , Try Again")
                }
                else{
                    setPopupRedState(true);
                    setMessageRedState("Timeout Pls Try Again")
                }
            })
        })
    }

    useEffect(() => {
        setMobile_number(location.state.mobile_data)
        setHash(location.state.hash)
    }, []);

    return (
        <div className="outer" >
            <div className="inner" >
                <form onSubmit={handleSubmit}>
                    <h3>Enter OTP</h3>

                    <div class="form-group  ">
                        <label for="name">OTP :</label>
                        <input type="text" id="name" onChange={(e) => setOtp(e.target.value)}
                            class="form-control " placeholder="Enter OTP " />
                    </div>
                    <button type="Submit" className="btn btn-dark btn-lg btn-block">Send OTP</button>
                </form>
            </div >
            {popupGreenState?<Popup color="success" message={messageGreenState} />:null}
            {popupRedState?<Popup color="error" message={messageRedState} />:null}

        </div >
    )
}

export default Verifyotp