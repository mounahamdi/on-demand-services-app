import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ErrorLog from './ErrorLog.jsx';
import ForgotPassword from './ForgotPassword.jsx';

const LogIn = ({ handleLogin, logIn, getUserId, getUserName }) => {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [showInvalidLog, setShowInvalidLog] = useState(false)
    const [forgotPass, setForgotPass] = useState(false)

    const divStyle = {
        textAlign: "center",
        align: "center",
    }
    const inputStyle = {
        width: "35%",
        padding: "8px 18px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box"
    }

    return (
        <div style={divStyle}>
            <br />
            <br />
            <label>User Name: </label> <input style={inputStyle} type='text' placeholder='enter the user name here' onChange={(e) => setUserName(e.target.value)} />
            <br />
            <br />
            <label>Password: </label> <input style={inputStyle} type='password' placeholder='enter the password' onChange={(e) => setUserPassword(e.target.value)} />
            <br />
            <br />
            <p style={{
                textAlign: "right",
                marginRight: "408px"
            }}><Link to="/forgotPassword" onClick={() => setForgotPass(!forgotPass)}>Forgot password?</Link></p>
            {forgotPass ? <ForgotPassword /> : ""}
            <Button variant="success" onClick={() => { logIn(userName, userPassword); getUserId(userName); getUserName(userName); setShowInvalidLog(true); handleLogin() }}>Log In</Button>
            {showInvalidLog ? <ErrorLog /> : ""}
        </div >
    )
}

export default LogIn;