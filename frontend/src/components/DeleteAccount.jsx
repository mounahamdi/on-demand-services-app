import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyContext } from '../App';

const DeleteAccount = ({ handleToUnsubscribe, userId, deleteAccount }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const username = useContext(MyContext)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Unsubscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>{username}! your account will be deleted definitively, to continue press confirm</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() =>{deleteAccount(userId);handleToUnsubscribe()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAccount;