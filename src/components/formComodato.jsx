function FormComodato({ formData, setFormData }) {

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
          Barril 7, 8, 9 Lts:
          <input
            type="number"
            name="barril_7_8_9_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.barril_7_8_9_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Barril 10, 12 Lts:
          <input
            type="number"
            name="barril_10_12_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.barril_10_12_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Barril 18 Lts:
          <input
            type="number"
            name="barril_18_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.barril_18_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Barril 25 Lts:
          <input
            type="number"
            name="barril_25_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.barril_25_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Barril 30 Lts:
          <input
            type="number"
            name="barril_30_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.barril_30_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Barril 40, 50 Lts:
          <input
            type="number"
            name="barril_40_50_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.barril_40_50_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Choppera sin barril:
          <input
            type="number"
            name="choppera_sin_barril"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.choppera_sin_barril}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Reductor de presión:
          <input
            type="number"
            name="reductor_presion"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.reductor_presion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Tubo CO2:
          <input
            type="number"
            name="tubo_CO2"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.tubo_CO2}
            onChange={handleChange}
          />
        </label>
        <label className="m-2">
          Kg: 
          <input
            type="number"
            name="peso_tubo_CO2"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.peso_tubo_CO2}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Válvula automática: 
          <input
            type="number"
            name="valvula_automatica"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.valvula_automatica}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Cabezal 10 Lts: 
          <input
            type="number"
            name="cabezal_10_litros"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.cabezal_10_litros}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Adicionales: 
          <input
            type="text"
            name="adicionales"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.adicionales}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="m-2">
          Observaciones:
          <input
            type="text"
            name="observaciones"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.observaciones}
            onChange={handleChange}
          />
        </label>
      </form>
    </section>
  );
}

export default FormComodato;
