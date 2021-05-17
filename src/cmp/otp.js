import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OTP() {
    const [mobile_number, setMobile_number] = useState("");
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            mobile_number,
        };
        fetch('http://192.168.1.14:8000/otp/send', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((result) => {
            result.json().then((resp) => {
                history.push({ pathname: "/verify", state: { mobile_data: resp.mobile_number, hash: resp.hash } });
            })
        })
    }
    return (
        <div className="outer" >
            <div className="inner" >
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>

                    <div class="form-group  ">
                        <label for="name">Mobile Number :</label>
                        <input type="text" id="name" onChange={(e) => setMobile_number(e.target.value)}
                            class="form-control registerInputField" placeholder="Mobile Number " />
                    </div>
                    <button type="Submit" className="btn btn-dark btn-lg btn-block registerButton">Get OTP</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>
                    
                </form>
            </div >
        </div >
    )
}
