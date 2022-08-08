import React, { Component, useState, useEffect} from 'react';
import {Table,Button,Dropdown,DropdownItem, DropdownMenu,DropdownToggle} from "reactstrap";
import Cookies from 'universal-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Vistas.css"
import { Request } from "./Request";

const baseUrl="http://localhost:5000/usuario";
const cookies = new Cookies();

const VistaEmpleado = () =>{
    const [info,setInfo]= new useState([]);
    let api = Request();

    const fetchApi = async()=>{
        let url= baseUrl+"/"+cookies.get("id")
        api.get(url).then((datos)=>{
            setInfo(datos);
            //console.log(datos);
        })
    }
    
    useEffect(() => {
        fetchApi([]);
    },[])
    
    return(
        <> <div className='vistaT'>
            <h2>Datos Personales</h2>
            <Table>
                <tr>
                    <th>Nombres:</th>
                    <th>{info.nombres}</th>
                </tr>
                <tr>
                    <th>Apellidos:</th>
                    <th>{info.apellidos}</th>
                </tr>
                <tr>
                    <th>Correo:</th>
                    <th>{info.correo}</th>
                </tr>
                <tr>
                    <th>Usuario:</th>
                    <th>{info.user}</th>
                </tr>
                <tr>
                    <th>CI:</th>
                    <th>{info.ci}</th>
                </tr>
                <tr>
                    <th>Fecha de nacimiento:</th>
                    <th>{info.fecha}</th>
                </tr>
                <tr>
                    <th>Telefono:</th>
                    <th>{info.telf}</th>
                </tr>
                <tr>
                    <th>Direccion:</th>
                    <th>{info.direccion}</th>
                </tr>
                <tr>
                    <th>Vacunado:</th>
                    <th>{info.vacuna}</th>
                </tr>
                <tr>
                    <th>Tipo de Vacuna:</th>
                    <th>{info.tvacuna}</th>
                </tr>
                <tr>
                    <th>Fecha de Vacuna:</th>
                    <th>{info.vfecha}</th>
                </tr>
                <tr>
                    <th>Numero de dosis:</th>
                    <th>{info.dosis}</th>
                </tr>
            </Table>
         </div></> 
    )
}

export default VistaEmpleado;