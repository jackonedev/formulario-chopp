//Create a functional component called FormContainer

import React from "react";
import { useState } from "react";
import FormCliente from "../formCliente";
import FormComodato from "../formComodato";
import FormRecibo from "../formRecibo";
import "../formStyles.css"

function FormContainer() {
  // State 1: create a state for clientes
  const [formDataCliente, setFormDataCliente] = useState({
    dni: "",
    nombre: "",
    apellido: "",
    direccion: "",
    barrio: "",
    localidad: "",
    telefono: "",
    email: "",
    vehiculo: "",
    patente: "",
    fecha_cumple: "",
  });
  const [cliente_id, setClienteId] = useState("");

  // State 2: create a state for comodatos
  const [formDataComodato, setFormDataComodato] = useState({
    barril_7_8_9_litros: 0,
    barril_10_12_litros: 0,
    barril_18_litros: 0,
    barril_25_litros: 0,
    barril_30_litros: 0,
    barril_40_50_litros: 0,
    choppera_sin_barril: 0,
    reductor_presion: 0,
    tubo_CO2: 0,
    peso_tubo_CO2: 0,
    valvula_automatica: 0,
    cabezal_10_litros: 0,
    adicionales: "",
    observaciones: "",
  });
  const [comodato_id, setComodatoId] = useState("");

  // State 3: create a state for recibos
  const [formDataRecibo, setFormDataRecibo] = useState({
    cliente_id: cliente_id,
    comodato_id: comodato_id,
    monto_recibo: "",
  });

  // create a function called handleChange that will be called when the user types in the form
  const handlePostSubmitCliente = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataCliente),
    };

    fetch("http://localhost:8000/clientes", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log("Respuesta del servidor:", data);
        // Actualizar el estado de cliente_id con el valor de data.id
        setClienteId(data.id);
        setFormDataComodato((prevFormData) => ({
          ...prevFormData,
          cliente_id: data.id,
        }));
        setFormDataRecibo((prevFormData) => ({
          ...prevFormData,
          cliente_id: data.id,
        }));
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error al enviar la solicitud:", error);
      });
  };

  const handleGetSubmitCliente = (event) => {
    event.preventDefault();

    const url = `http://localhost:8000/clientes/dni/?cliente_dni=${formDataCliente.dni}`;
    console.log("URL de la solicitud GET:", url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log("Respuesta del servidor:", data);
        // Actualizar el estado de formData con los valores de data
        setFormDataCliente((prevFormData) => ({
          ...prevFormData,
          dni: data.dni,
          nombre: data.nombre,
          apellido: data.apellido,
          direccion: data.direccion,
          barrio: data.barrio,
          localidad: data.localidad,
          telefono: data.telefono,
          email: data.email,
          vehiculo: data.vehiculo,
          patente: data.patente,
          fecha_cumple: data.fecha_cumple,
        }));
        setClienteId(data.id);
        setFormDataComodato((prevFormData) => ({
          ...prevFormData,
          cliente_id: data.id,
        }));
        setFormDataRecibo((prevFormData) => ({
          ...prevFormData,
          cliente_id: data.id,
        }));
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error al enviar la solicitud:", error);
      });
  };

  const handlePostSubmitRecibo = async (event) => {
    event.preventDefault();

    try {
      // Primera solicitud POST
      const requestOptionsComodato = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataComodato),
      };

      const responseComodato = await fetch(
        "http://localhost:8000/comodatos",
        requestOptionsComodato
      );
      const dataComodato = await responseComodato.json();

      // Manejar la respuesta del servidor
      console.log("Respuesta del servidor (Comodato):", dataComodato);

      // Actualizar el estado de comodato_id
      setComodatoId(dataComodato.id);
      // Actualizar el estado de formDataRecibo
      setFormDataRecibo((prevFormData) => ({
        ...prevFormData,
        comodato_id: dataComodato.id,
      }));

      // Utilizar formDataRecibo actualizado como body para la segunda solicitud POST
      const requestOptionsRecibo = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formDataRecibo,
          comodato_id: dataComodato.id, // Asegurarse de incluir el comodato_id actualizado en formDataRecibo
        }),
      };

      const responseRecibo = await fetch(
        "http://localhost:8000/recibos",
        requestOptionsRecibo
      );
      const dataRecibo = await responseRecibo.json();

      // Manejar la respuesta del servidor
      console.log("Respuesta del servidor (Recibo):", dataRecibo);
    } catch (error) {
      // Manejar errores
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      {/* Column 1 */}
      <div className="form-column">
        <FormCliente
          formData={formDataCliente}
          setFormData={setFormDataCliente}
          handleGetSubmit={handleGetSubmitCliente}
          handlePostSubmit={handlePostSubmitCliente}
        />
      </div>
      {/* Column 2 */}
      <div className="form-column-end">
        <FormRecibo
          formData={formDataRecibo}
          setFormData={setFormDataRecibo}
          handlePostSubmit={handlePostSubmitRecibo}
        />
      </div>
      {/* Column 3 */}
      <div className="form-column">
        <FormComodato
          formData={formDataComodato}
          setFormData={setFormDataComodato}
        />
      </div>
    </>
  );
}

export default FormContainer;
