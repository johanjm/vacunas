import React, { Component, useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import VistaEmpleado from '../components/VistaEmpleado';
import axios from 'axios';
import CrudApiE from '../components/CrudApiE';

const baseUrl="http://localhost:5000/usuario";
const cookies = new Cookies();


class Empleado extends Component {

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('nombres', {path: "/"});
        cookies.remove('admin', {path: "/"});
        cookies.remove('user', {path: "/"});
        cookies.remove("usuario");
        cookies.remove('password', {path: "/"});
        cookies.remove('ci', {path: "/"});
        cookies.remove('correo', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {   
        var admin=cookies.get("admin");
        if(admin=="true"){
            window.location.href="./admin";
        }
        if(!cookies.get('user')){
            window.location.href="./";
        }
    }


    render() {
        console.log(cookies.get("usuario"));
        console.log('id: '+ cookies.get('id'));
        console.log('apellidos: '+cookies.get('apellidos'));
        console.log('nombres: '+cookies.get('nombres'));
        console.log('admin: '+cookies.get('admin'));
        console.log('user: '+cookies.get('user'));
        return (
            <div>
                 <div className='global'>Menu Principal de Empleado <button className="btn btn-danger" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
                <div>
                    <VistaEmpleado/>
                    <CrudApiE/>
                </div>
            </div>
            
        );
    }
}

export default Empleado;