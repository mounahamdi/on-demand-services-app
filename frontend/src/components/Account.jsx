import React, { useState, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import ChangePhone from './ChangePhone.jsx';
import ChangePassword from './ChangePassword.jsx';
import DeleteAccount from './DeleteAccount.jsx';
import { MyContext } from '../App.js';
const Account = ({ changePhone, changePassword, userId, deleteAccount }) => {
    const [toChangePhone, setToChangePhone] = useState(false)
    const [toChangePass, setToChangePass] = useState(false)
    const [toUnsubscribe, setToUnsubscribe] = useState(false)

    const username = useContext(MyContext)

    const handleToChangePhone = () => {
        setToChangePhone(!toChangePhone)
    }

    const handleToChangePass = () => {
        setToChangePass(!toChangePass)
    }

    const handleToUnsubscribe = () => {
        setToUnsubscribe(!toUnsubscribe)
    }

    return (
        <>
        <br />
        <br />
        <br />
        <h5 style={{textAlign:'center'}}>Hello {username}! you will recieve daily job offers on your phone number</h5>
        <br />
        <br />
        <ListGroup>
            <ListGroup.Item onClick={() => handleToChangePhone()}>Change phone number</ListGroup.Item>
            {toChangePhone ? <ChangePhone handleToChangePhone={handleToChangePhone} changePhone={changePhone} userId={userId} /> : ""}
            <ListGroup.Item onClick={() => handleToChangePass()}>Change password</ListGroup.Item>
            {toChangePass ? <ChangePassword handleToChangePass={handleToChangePass} changePassword={changePassword} userId={userId}/> : ""}
            <ListGroup.Item style={{color:"red"}} onClick={() => handleToUnsubscribe()}>Unsubscribe</ListGroup.Item>
            {toUnsubscribe ? <DeleteAccount handleToUnsubscribe={handleToUnsubscribe} userId={userId} deleteAccount={deleteAccount} /> : ""}
        </ListGroup>
        </>
    )
}

export default Account;