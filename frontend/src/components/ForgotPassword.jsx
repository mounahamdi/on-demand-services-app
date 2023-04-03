import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

const ForgotPassword = ({handleToChangePass,changePassword, userId}) => {
    const [newPass, setNewPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [changed,setChanged] = useState(false)
    const [errorMessage,setErrorMessage] = useState("")
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
    
    const handleConfirm = (e) => {
        let newConfirm = e.target.value
        setConfirmPass(newConfirm)
        if(newPass===confirmPass){
            changePassword(userId,newPass)
            setErrorMessage("Password confirmation match the password")
        }
        else{
            setErrorMessage("Password confirmation doesn't match the password")
        }
    }

    return (
        <div style={divStyle}>
            <br />
            <br />
            <label>New password: </label> <input style={inputStyle} type='text' placeholder='enter the new password here' onChange={(e) => setNewPass(e.target.value)} />
            <br />
            <br />
            <label>Confirm new password: </label> <input style={inputStyle} type='password' placeholder='confirm the new password' onChange={handleConfirm} />
            {errorMessage!==""?<h6 style={{color:"red"}}>{errorMessage}</h6>:null}
            {changed?<h6 style={{color:"green"}}>password changed successfully</h6>:null}
            <br />
            <br />
            <Button variant="secondary" onClick={() => handleToChangePass()}>Close</Button>
            <Button variant="success" onClick={()=>{handleConfirm(); setChanged(true)}}>Save change</Button>
        </div>
    )
}

export default ForgotPassword;