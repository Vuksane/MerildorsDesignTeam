import React, { useState, useEffect } from "react";
import AdminpanelindexListaVesti from "./AdminpanelindexListaVesti"
import ReactTable from "react-table";  
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { getAllNews } from "../../../services/API";

const AdminpanelindexListaTema = ({data, title}) => {


    return (<>
        <MDBTableHead color="primary-color" textBlack>
            <tr>
                <th>{title}</th>
            </tr>
            <tr>
                <th>ID</th>
                <th>Naslov Vesti</th>
                <th>Datum Vesti</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {data?Object.keys(data).map(el=><AdminpanelindexListaVesti data={data[el]}/>):null}
        </MDBTableBody>       
    </>)
}

export default AdminpanelindexListaTema
