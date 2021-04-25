import React, { useState, useEffect } from "react";
import { getAllNews } from "../../../services/API";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import moment from "moment";
import ConfirmationModalCom from "../../../components/Modals/ConfrimationModalCom"

const AdminpanelindexListaKomentara = ({deleteKomentar, data}) => {

    const {idkomentari, username, email, criticism} = data
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    return (<>
        <ConfirmationModalCom show={show} setShow={setShow} deleteKomentar={deleteKomentar} data={data} />
        <tr key={idkomentari}>
            <th>{idkomentari}</th>
            <th>{username}</th>
            <th>{email}</th>
            <th>{criticism}</th>
            <th><Button onClick={() => handleShow()}>X</Button></th>
        </tr>
    </>)
}

export default AdminpanelindexListaKomentara
