import React, { useState, useEffect } from "react";
import { getAllNews } from "../../../services/API";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from "react-bootstrap";
import { useAlert } from "react-alert";
import moment from "moment";

const AdminpanelindexListaVesti = ({deleteVest, data}) => {

    const {idVesti, naslovVesti, datumVesti} = data

    return (
        <tr key={idVesti}>
            <th>{idVesti}</th>
            <th>{naslovVesti}</th>
            <th>{datumVesti}</th>
            <th><Button onClick={() => deleteVest(data)}>X</Button></th>
        </tr>
    )
}

export default AdminpanelindexListaVesti
