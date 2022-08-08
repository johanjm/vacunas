import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import "../css/Forms.css";
import { Request } from "./Request";
import Select from "react-select";

const baseUrl="http://localhost:5000/usuario";
const cookies = new Cookies();
const op= [{value:"si", label: "vacunado"},{value:"no", label: "no vacunado"}];
const vac= [{value:"Sputnik", label: "Sputnik"},
            {value:"AstraZeneca", label: "AstraZeneca"},
            {value:"Pfizer", label: "Pfizer"},
            {value:"JhonsonJhonson", label: "JhonsonJhonson"},];

const initailForm = {
    id: cookies.get("id"),
    admin: false,
    estado: true,
    nombres: cookies.get("nombres"),
    apellidos: cookies.get("apellidos"),
    correo: cookies.get("correo"),
    ci: cookies.get("ci"),
    user: cookies.get("user"),
    password: cookies.get("password"),
    fecha: "",
    direccion: "",
    telf: "",
    vacuna: "",
    tvacuna: "",
    vfecha: "",
    dosis: 0
    
};

const FormEmpleado = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  const [vacu,setVacu]= useState("");

  useEffect(() => {

    if (dataToEdit) {
      setForm(dataToEdit);
      window.location.reload(false);
    } else {
      setForm(initailForm);
      
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
        form.nombres= cookies.get("nombres");
        form.apellidos= cookies.get("apellidos");
        form.correo= cookies.get("correo");
        form.ci= cookies.get("ci");
        form.user= cookies.get("user");
        form.password= cookies.get("password");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      
    });
    console.log(form);
  };

  const handleChange1 = (e) => {
    if (vacu=="si") {
        form.nombres= cookies.get("nombres");
        form.apellidos= cookies.get("apellidos");
        form.correo= cookies.get("correo");
        form.ci= cookies.get("ci");
        form.user= cookies.get("user");
        form.password= cookies.get("password");
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            })
    }
    ;
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm([]);
    setDataToEdit([]);
  };
  const handleSelectChange = ( event ) => {
    form.vacuna=event.value;
    setVacu(form.vacuna);
}
const handleSelectChange1 = ( event ) => {
    if (vacu=="si") {
        form.tvacuna=event.value;
        setVacu(event.value);
    }
    

}
  return (
    <div className="vistaT">
        <div className="containerP">
        <h3>Editar Datos Personales</h3>
        <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          class="form-control"
          name="fecha"
          pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" 
          placeholder="fecha de nacimiento(aaaa-mm-dd)"
          onChange={handleChange}
          value={form.date}
          required
        />
        <input
          type="text"
          class="form-control"
          name="telf"
          placeholder="Numero de Celular"
          onChange={handleChange}
          value={form.telf}
          pattern="[0-9]{10}"
          required
        />
        <input
          type="text"
          class="form-control"
          name="direccion"
          placeholder="Dirección"
          onChange={handleChange}
          value={form.direccion}
          required
        /><br/>
        Estado de su vacuna:
        <Select
            defaultValue = {op[1]}
            options={op}
            onChange={handleSelectChange}
        />
        <div>
            <br/>
            Tipo de vacuna:
            <Select
                options={vac}
                onChange={handleSelectChange1}
            />
            <input
                type="text"
                class="form-control"
                name="vfecha"
                pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" 
                placeholder="fecha de vacunacion (aaaa-mm-dd)"
                onChange={handleChange1}
                value={form.vfecha}
            />
            <input
                type="text"
                class="form-control"
                name="dosis"
                pattern="[1-5]{1}"
                placeholder="numero de dosis"
                onChange={handleChange1}
                value={form.dosis}
            />
        </div>
        
        <input type="submit" value="Guardar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
        </div>
    </div>
  );
};

export default FormEmpleado;