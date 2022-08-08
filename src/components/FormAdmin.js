import React, { useState, useEffect } from "react";
import "../css/Forms.css";
import { Request } from "./Request";

const baseUrl="http://localhost:5000/usuario";

const initailForm = {
    id: null,
    admin: false,
    estado: true,
    nombres: "",
    apellidos: "",
    correo: "",
    ci: null,
    user: "",
    password: "",
    fecha: "",
    direccion: "",
    telf: "",
    vacuna: "no",
    tvacuna: "",
    vfecha: "",
    dosis: 0
    
};

const FormAdmin = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  let api = Request();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      window.location.reload(false);
    } else {
      setForm(initailForm);
      
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    form.user=form.nombres.replace(/\s+/g, '') 
    form.password=form.nombres.replace(/\s+/g, '') 
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      
    });
    console.log(form);
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
  
  return (
    <div className="vistaT">
        <div className="containerP">
        <h3>Agregar Empleado</h3>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control"
          name="nombres"
          placeholder="Nombres"
          onChange={handleChange}
          value={form.name}
          pattern="[a-zA-Z Ññ]+"
          required
        />
        <input
          type="text"
          class="form-control"
          name="apellidos"
          placeholder="Apellidos"
          onChange={handleChange}
          value={form.apellidos}
          pattern="[a-zA-Z ñÑ]+"
          required
        />
        <input
          type="text"
          class="form-control"
          name="ci"
          placeholder="Numero de Cedula"
          onChange={handleChange}
          value={form.ci}
          pattern="[0-9]{10}"
          required
        />
        <input
          type="email"
          class="form-control"
          name="correo"
          placeholder="Correo electronico"
          onChange={handleChange}
          value={form.correo}
          required
        />

        <input type="submit" value="Guardar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
        </div>
    </div>
  );
  
};

export default FormAdmin;