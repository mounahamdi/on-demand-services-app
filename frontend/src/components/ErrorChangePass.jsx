import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ErrorChangePass = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oups</Modal.Title>
        </Modal.Header>
        <Modal.Body>Password confirmation doesn't match with password</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorChangePass;