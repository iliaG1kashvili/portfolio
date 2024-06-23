import React from "react";
import './SignUp.css';



function SignUp(){
    return(
        <div>
            <div className="SignUpPad">
                <div>
                    <h1 className="headtxt">
                        Create New Account
                    </h1>
                </div>
                <div><input className="FirstName" placeholder="Enter FirstName"/></div>
                <div><input className="LastName" placeholder="Enter LastName"/></div>
                <div><input className="Email" placeholder="Enter Email"/></div>
                <div><input type="password" className="Password" placeholder="Create Passwor"/></div>
                <div><input type="password" className="ReplayPassword" placeholder="Replay Password"/></div>
                <div className="buttons">
                    <button className="CreateAccount">Create New Account</button>
                    <button className="SignIn">Facebook</button>
                </div>
            </div>
        </div>
    )
}



export default SignUp;