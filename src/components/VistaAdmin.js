import React, { Component, useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Vistas.css"
import {Table,Button,Dropdown,DropdownItem, DropdownMenu,DropdownToggle} from "reactstrap";
import { Request } from './Request';
import userEvent from '@testing-library/user-event';
const baseUrl="http://localhost:5000/usuario";
const cookies = new Cookies();
let api = Request();

const VistaAdmin = () =>{
    const [usuarios,setUsuarios]= new useState([]);
    const [dropdown,setDropdown]= new useState(null);
    const [dropdown1,setDropdown1]= new useState(null);
    const [busq,setBusq]= new useState("");

    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }
    const abrirCerrarDropdown1=()=>{
        setDropdown1(!dropdown1);
    }

    const fetchApi = async()=>{
        api.get(baseUrl).then((datos)=>{
            setUsuarios(datos);
            //console.log(datos);
        })
    }


    let result=null;
    if (busq=="") {
        result=usuarios;
    }else{
        if(busq=="si"|| busq=="no"){
            result= usuarios.filter( (dat)=>
            dat.vacuna.toLowerCase().includes(busq.toLocaleLowerCase())
            )
        }else{
            result= usuarios.filter( (dato)=>
            dato.tvacuna.toLowerCase().includes(busq.toLocaleLowerCase())
            )

        }
    }

    
    useEffect(() => {
        fetchApi();
    },[])
    
    return(
        <><div className='VistaL'>
            <h2 className='global'>Lista de empleados</h2>
            <div >
                <h3>Filtros</h3>
                <table>
                    <tr>
                        <th>
                        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                            <DropdownToggle>
                            Estado de Vacunación
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem onClick={() => setBusq("si")}>Vacunado</DropdownItem>
                            <DropdownItem onClick={() => setBusq("no")}>No Vacunado</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </th>
                        <th>
                        <Dropdown isOpen={dropdown1} toggle={abrirCerrarDropdown1}>
                            <DropdownToggle>
                            Tipo de Vacuna
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem onClick={() => setBusq("Sputnik")}>Sputnik</DropdownItem>
                            <DropdownItem onClick={() => setBusq("AstraZeneca")}>AstraZeneca</DropdownItem>
                            <DropdownItem onClick={() => setBusq("Pfizer")}>Pfizer</DropdownItem>
                            <DropdownItem onClick={() => setBusq("JhonsonJhonson")}>JhonsonJhonson</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </th>
                        <th>
                            <button type="button" class="btn btn-info" onClick={() => setBusq("")}>Limpiar Filtro</button>
                        </th>
                    </tr>
                </table>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Vacuna</th>
                        <th>Tipo Vacuna</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((usuarios)=>{
                        return(
                        <tr key={usuarios.id}>
                            <td>{usuarios.nombres}</td>
                            <td>{usuarios.apellidos}</td>
                            <td>{usuarios.vacuna}</td>
                            <td>{usuarios.tvacuna}</td>
                            <td>
                                <button type="button" class="btn btn-success">Editar</button> <Button color='danger'>Eliminar</Button>
                            </td>
                        </tr>
                    )})
                    }
                </tbody>
            </Table>
            </div></>
        
    )
}

export default VistaAdmin;