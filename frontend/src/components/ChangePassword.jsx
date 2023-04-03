import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
//import ErrorChangePass from './ErrorChangePass.jsx';

const ChangePassword = ({ handleToChangePass, changePassword, userId }) => {
    const [newPass, setNewPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [changed, setChanged] = useState(false)
    //const [error, setError] = useState(false)
    ///const [errorMessagePass, setErrorMessagePass] = useState("")
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
            <label>New password: </label> <input style={inputStyle} type='password' placeholder='enter the new password here' onChange={(e) => setNewPass(e.target.value)} />
            <br />
            <br />
            <label>Confirm new password: </label> <input style={inputStyle} type='password' placeholder='confirm the new password' onChange={(e) => setConfirmPass(e.target.value)} />
            {changed ? <h6 style={{ color: "green" }}>password changed successfully</h6> : null}
            <br />
            <br />
            <Button variant="secondary" onClick={() => handleToChangePass()}>Close</Button>
            <Button variant="success" onClick={() => { changePassword(userId, newPass, confirmPass); setChanged(true) }}>Save change</Button>
        </div>
    )
}

export default ChangePassword;