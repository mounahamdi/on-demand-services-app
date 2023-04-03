import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SuccessSign from './SuccessSign.jsx';
import ErrorSign from './ErrorSign.jsx';

const SignUp = ({ addTechnician, technicians }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [service, setService] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [validPass, setValidPass] = useState(false)
    const [showValid, setShowValid] = useState(false)
    const [showInvalid, setShowInvalid] = useState(false)
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

    const handlePassword = (event) => {
        let new_pass = event.target.value;
        setPassword(new_pass);

        // regular expressions to validate password
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!new_pass.match(lowerCase)) {
            setMessage("Password should contains lowercase letters!")
            setValidPass(false)
        } else if (!new_pass.match(upperCase)) {
            setMessage("Password should contain uppercase letters!")
            setValidPass(false)
        } else if (!new_pass.match(numbers)) {
            setMessage("Password should contains numbers also!")
            setValidPass(false)
        } else if (new_pass.length < 8) {
            setMessage("Password length should be more than 8!")
            setValidPass(false)
        } else {
            setMessage("Password is strong!")
            setValidPass(true)
        }
    }

    const technicianNotFound = () => {
        let temp = technicians.filter(technician => technician.phone === phone && technician.userName === name)
        if (temp.length === 0) {
            addTechnician(name, password, city, service, phone)
            setShowValid(true)
        }
        else {
            setShowInvalid(true)
        }
    }

    return (
        <div style={divStyle}>
            <br />
            <br />
            Already have an account?  <Link to='/login'>Log In</Link>
            <br />
            <br />
            <br />
            <label>User Name: </label> <input style={inputStyle} type='text' placeholder='enter your name here' onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label>Phone Number: </label> <input style={inputStyle} type='text' placeholder='enter your phone number here' onChange={(e) => setPhone(e.target.value)} />
            <br />
            <br />
            <label>City: </label> <select style={inputStyle} onChange={(e) => setCity(e.target.value)}>
                <option value="none" selected>Open to choose the city</option>
                <option value="Ariana">Ariana</option>
                <option value="Béja">Béja</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Gabès">Gabès</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Kebili">Kebili</option>
                <option value="Kef">Kef</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Manouba">Manouba</option>
                <option value="Medenine">Medenine</option>
                <option value="Monastir">Monastir</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Sfax">Sfax</option>
                <option value="Sidi Bouzid">Sidi Bouzid</option>
                <option value="Siliana">Siliana</option>
                <option value="Sousse">Sousse</option>
                <option value="Tataouine">Tataouine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Tunis">Tunis</option>
                <option value="Zaghouan">Zaghouan</option>
            </select>
            <br />
            <br />
            <label>City: </label> <select style={inputStyle} onChange={(e) => setService(e.target.value)}>
                <option value="none" selected>Open to choose the service</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electricity">Electricity</option>
                <option value="Wifi repair and installation">Wifi repair and installation</option>
                <option value="Gardening">Gardening</option>
            </select>
            <br />
            <br />
            <label>Password: </label> <input style={inputStyle} type='password' placeholder='enter the password' onChange={handlePassword} />
            {message === "Password is strong!" ? <h6 style={{ color: "green" }}> {message} </h6>
                : <h6 style={{ color: "red" }}> {message} </h6>}
            <br />
            {validPass?<Button variant="success" onClick={() => { technicianNotFound() }}>Sign Up</Button>
            :<Button variant="success" disabled={true}>Sign Up</Button>}
            {showValid ? <SuccessSign /> : ""}
            {showInvalid ? <ErrorSign /> : ""}
        </div>
    )
}

export default SignUp;