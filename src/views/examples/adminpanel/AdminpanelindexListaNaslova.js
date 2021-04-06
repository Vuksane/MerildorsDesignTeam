import React, { useState, useEffect } from "react";
import AdminpanelindexListaVesti from "./AdminpanelindexListaVesti"
import ReactTable from "react-table";  
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { getAllNews } from "../../../services/API";
import AdminpanelindexListaKomentara from "./AdminpanelindexListaKomentara";

const AdminpanelindexListaNaslova = ({data, title}) => {

    return (<>
        <MDBTableHead color="primary-color" textBlack>
            <tr>
                <th>{title}</th>
            </tr>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Komentar</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {data?Object.keys(data).map(el=><AdminpanelindexListaKomentara data={data[el]}/>):null}
        </MDBTableBody>       
    </>)
}

export default AdminpanelindexListaNaslova
