import React, {Component} from "react";
import "../css/Login.css";
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:5000/usuario";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            user: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {user: this.state.form.user, password: this.state.form.password, admin: this.state.form.admin}})
        
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set("usuario", respuesta);
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombres', respuesta.nombres, {path: "/"});
                cookies.set('apellidos', respuesta.apellidos, {path: "/"});
                cookies.set('admin', respuesta.admin, {path: "/"});
                cookies.set('user', respuesta.user, {path: "/"});
                cookies.set('password', respuesta.password, {path: "/"});
                cookies.set('ci', respuesta.ci, {path: "/"});
                cookies.set('correo', respuesta.correo, {path: "/"});
                alert(`Bienvenido ${respuesta.nombres} ${respuesta.apellidos}`);
                if (respuesta.admin===true) {
                    window.location.href="./admin";
                }else{
                    window.location.href="./empleado";
                }
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('user')){
            if(cookies.get('admin'===true)){
                window.location.href="./admin";
            }else{
                window.location.href="./empleado";
            }
        }
    }

    render() {
        return (
            <div className="global">
            <div className="containerPrincipal">
            <div className="containerSecundario">
            <div className="form-group">
                <label>Usuario: </label>
                <br/>
                <input
                type="text"
                className="form-control"
                name="user"
                onChange={this.handleChange}
                />
                <br/>
                <label>Contraseña: </label>
                <br/>
                <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
                />
                <br />
                <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
            </div>
            </div>
        </div></div>
        );
    }
}

export default Login;