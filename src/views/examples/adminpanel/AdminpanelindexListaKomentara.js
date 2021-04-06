import React, { useState, useEffect } from "react";
import { getAllNews } from "../../../services/API";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from "react-bootstrap";
import { deleteComment } from "../../../services/API";
import { useAlert } from "react-alert";
import moment from "moment";

const AdminpanelindexListaKomentara = ({data}) => {

    const {idkomentari, username, email, criticism} = data

    const deleteKomentar = (e) => {
        deleteComment(data).then((res)=>{
        })
        window.location.reload();
    };
    return (
        <tr key={idkomentari}>
            <th>{idkomentari}</th>
            <th>{username}</th>
            <th>{email}</th>
            <th>{criticism}</th>
            <th><Button onClick={deleteKomentar}>X</Button></th>
        </tr>
    )
}

export default AdminpanelindexListaKomentara
