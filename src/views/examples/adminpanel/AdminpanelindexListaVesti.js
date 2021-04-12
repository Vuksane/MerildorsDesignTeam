import React, { useState, useEffect } from "react";
import { getAllNews } from "../../../services/API";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import moment from "moment";
import ConfirmationModal from "../../../components/Modals/ConfirmationModal"

const AdminpanelindexListaVesti = ({deleteVest, data}) => {

    const {idVesti, naslovVesti, datumVesti} = data
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (<>
        <ConfirmationModal show={show} setShow={setShow} deleteVest={deleteVest} data={data} />
        <tr key={idVesti}>
            <th>{idVesti}</th>
            <th>{naslovVesti}</th>
            <th>{datumVesti}</th>
            <th><Button onClick={() => handleShow()}>X</Button></th>
        </tr>
    </>)
}

export default AdminpanelindexListaVesti
