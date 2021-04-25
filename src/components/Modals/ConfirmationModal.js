import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";

const ConfirmationModal = ({show, setShow, deleteVest, data}) => {

    const {idVesti, naslovVesti, datumVesti} = data

    const handleClose = () => setShow(false);
    
    const handleConfirm = () => {
        deleteVest(data)
        setShow(false)
    }
    const handleCancel = () => {
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <p>Da li ste sigurni da zelite da obrisete {naslovVesti} ?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleCancel()}>Odustani</Button>
                <Button variant="primary" onClick={()=>handleConfirm()}>Potvrdi</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal
