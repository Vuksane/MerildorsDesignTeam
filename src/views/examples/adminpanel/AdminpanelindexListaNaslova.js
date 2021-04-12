import React, { useState, useEffect } from "react";
import AdminpanelindexListaVesti from "./AdminpanelindexListaVesti"
import ReactTable from "react-table";  
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { getAllNews } from "../../../services/API";
import AdminpanelindexListaKomentara from "./AdminpanelindexListaKomentara";

const AdminpanelindexListaNaslova = ({deleteKomentar, data, title}) => {

    return (<>
        <MDBTableHead color="primary-color" textBlack>
            <tr style={{backgroundColor: "#5bc0de"}}>
                <th>Vest: {title}</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr style={{backgroundColor: "#2D6880"}}>
                <th width="20%">ID</th>
                <th width="10%">Username</th>
                <th width="20%">Email</th>
                <th width="40%">Komentar</th>
                <th width="10%"></th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {data?Object.keys(data).map(el=><AdminpanelindexListaKomentara deleteKomentar={deleteKomentar} data={data[el]}/>):null}
        </MDBTableBody>       
    </>)
}

export default AdminpanelindexListaNaslova
