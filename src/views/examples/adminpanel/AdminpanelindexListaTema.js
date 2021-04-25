import React, { useState, useEffect } from "react";
import AdminpanelindexListaVesti from "./AdminpanelindexListaVesti"
import ReactTable from "react-table";  
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { getAllNews } from "../../../services/API";

const AdminpanelindexListaTema = ({deleteVest, data, title}) => {


    return (<>
        <MDBTableHead color="primary-color" textBlack>
            <tr style={{backgroundColor: "#5bc0de", color:'white'}}>
                <th>Tema: {title}</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr style={{backgroundColor: "#2D6880", color:'white'}}>
                <th width="15%">ID</th>
                <th width="55%">Naslov Vesti</th>
                <th width="20%">Datum Vesti</th>
                <th width="10%"></th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {data?Object.keys(data).map(el=><AdminpanelindexListaVesti data={data[el]} deleteVest={deleteVest} />):null}
        </MDBTableBody>       
    </>)
}

export default AdminpanelindexListaTema
