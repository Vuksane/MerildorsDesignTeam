import React, { useState, useEffect } from "react";
import { getAllNews } from "../../../services/API";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from "react-bootstrap";
import { deleteNews } from "../../../services/API";
import { useAlert } from "react-alert";
import moment from "moment";

const AdminpanelindexListaVesti = ({data}) => {

    const {idVesti, naslovVesti, datumVesti} = data

    const deleteVest = (e) => {
        deleteNews(data).then((res)=>{
        })
        window.location.reload();
    };
    return (
        <tr key={idVesti}>
            <th>{idVesti}</th>
            <th>{naslovVesti}</th>
            <th>{datumVesti}</th>
            <th><Button onClick={deleteVest}>X</Button></th>
        </tr>
    )
}

export default AdminpanelindexListaVesti
