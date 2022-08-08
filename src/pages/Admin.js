import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import "../css/Login.css";
import VistaAdmin from '../components/VistaAdmin';
import FormAdmin from '../components/FormAdmin';
import CrudApi from '../components/CrudApi';

const cookies = new Cookies();

class Admin extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('nombres', {path: "/"});
        cookies.remove('admin', {path: "/"});
        cookies.remove('user', {path: "/"});
        cookies.remove("usuario");
        window.location.href='./';
    }

    componentDidMount() {   
        var admin=cookies.get("admin");
        //console.log("el resultado es ",admin);
        if(admin=="false"){
            window.location.href="./empleado";
        }
        if(!cookies.get('user')){
            window.location.href="./";
        }
    }

    


    render() {
        return (
            
            <div>
                
                <div className='global'>Menu Principal de Administrador <button className="btn btn-danger" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
                <div>
                </div>
                <CrudApi/>
                <VistaAdmin/>
            </div>
        );
    }
}

export default Admin;