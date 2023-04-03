import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ChangePhone = ({ handleToChangePhone, changePhone, userId }) => {
    const [newPhone, setNewPhone] = useState("")
    const [changed,setChanged] = useState(false)
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
            <label>New phone number: </label> <input style={inputStyle} type='text' placeholder='enter the new phone number here' onChange={(e) => setNewPhone(e.target.value)} />
            {changed?<h6 style={{color:"green"}}>phone number changed successfully</h6>:null}
            <br />
            <br />
            <Button variant="secondary" onClick={() => handleToChangePhone()}>Close</Button>
            <Button variant="success" onClick={() =>{changePhone(userId, newPhone); setChanged(true)}}>Save change</Button>
        </div>
    )
}

export default ChangePhone;