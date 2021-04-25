import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";

const ConfirmationModal = ({show, setShow, deleteKomentar, data}) => {

    const {idkomentari, username, email, criticism} = data

    const handleClose = () => setShow(false);
    
    const handleConfirm = () => {
        deleteKomentar(data)
        setShow(false)
    }
    const handleCancel = () => {
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <p>Da li ste sigurni da zelite da obrisete komentar korisnika {username}, {criticism} ?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleCancel()}>Odustani</Button>
                <Button variant="primary" onClick={()=>handleConfirm()}>Potvrdi</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal
