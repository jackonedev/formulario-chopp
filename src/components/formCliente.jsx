function FormCliente({ formData, setFormData, handlePostSubmit, handleGetSubmit }) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section
      style={{ marginLeft: "20px", flexDirection: "column", display: "flex" }}
    >
      <form className="flex flex-col">
        <label className="m-2">
          DNI:
          <input
            type="number"
            name="dni"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.dni}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Nombre:
          <input
            type="text"
            name="nombre"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Apellido:
          <input
            type="text"
            name="apellido"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.apellido}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Dirección:
          <input
            type="text"
            name="direccion"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.direccion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Barrio:
          <input
            type="text"
            name="barrio"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.barrio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Localidad:
          <input
            type="text"
            name="localidad"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.localidad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Teléfono:
          <input
            type="text"
            name="telefono"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          e-mail:
          <input
            type="email"
            name="email"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Vehículo:
          <input
            type="text"
            name="vehiculo"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.vehiculo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Patente:
          <input
            type="text"
            name="patente"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.patente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Fecha de nacimiento:
          <input
            type="text"
            name="fecha_cumple"
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.fecha_cumple}
            onChange={handleChange}
          />
        </label>
        <div className="m-2">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handlePostSubmit}
          >
            Enviar (POST)
          </button>
          <button
            type="submit"
            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            onClick={handleGetSubmit}
          >
            Obtener (GET)
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormCliente;
