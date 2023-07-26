import "./formStyles.css";

function FormComodato({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="form-column">
        <label>
          Barril 7, 8, 9 Lts:
          <input
            type="number"
            name="barril_7_8_9_litros"
            className="input-int"
            value={formData.barril_7_8_9_litros}
            onChange={handleChange}
          />
        </label>
        <label>
          Barril 10, 12 Lts:
          <input
            type="number"
            name="barril_10_12_litros"
            className="input-int"
            value={formData.barril_10_12_litros}
            onChange={handleChange}
          />
        </label>
        <label>
          Barril 18 Lts:
          <input
            type="number"
            name="barril_18_litros"
            className="input-int"
            value={formData.barril_18_litros}
            onChange={handleChange}
          />
        </label>
        <label>
          Barril 25 Lts:
          <input
            type="number"
            name="barril_25_litros"
            className="input-int"
            value={formData.barril_25_litros}
            onChange={handleChange}
          />
        </label>
        <label>
          Barril 30 Lts:
          <input
            type="number"
            name="barril_30_litros"
            className="input-int"
            value={formData.barril_30_litros}
            onChange={handleChange}
          />
        </label>
        <label>
          Barril 40, 50 Lts:
          <input
            type="number"
            name="barril_40_50_litros"
            className="input-int"
            value={formData.barril_40_50_litros}
            onChange={handleChange}
          />
        </label>

      <br />
        <label>
          Choppera sin barril:
          <input
            type="number"
            name="choppera_sin_barril"
            className="input-int"
            value={formData.choppera_sin_barril}
            onChange={handleChange}
          />
        </label>
        <label>
          Reductor de presión:
          <input
            type="number"
            name="reductor_presion"
            className="input-int"
            value={formData.reductor_presion}
            onChange={handleChange}
          />
        </label>
        <div>
          <label>
            Tubo CO2:
            <input
              type="number"
              name="tubo_CO2"
              className="input-int"
              value={formData.tubo_CO2}
              onChange={handleChange}
            />
          </label>
          <label>
            Kg:
            <input
              type="number"
              name="peso_tubo_CO2"
              className="input-int"
              value={formData.peso_tubo_CO2}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          Válvula automática:
          <input
            type="number"
            name="valvula_automatica"
            className="input-int"
            value={formData.valvula_automatica}
            onChange={handleChange}
          />
        </label>
        <label>
          Cabezal 10 Lts:
          <input
            type="number"
            name="cabezal_10_litros"
            className="input-int"
            value={formData.cabezal_10_litros}
            onChange={handleChange}
          />
        </label>
      <br />
        <label>
          Adicionales:
          <input
            type="text"
            name="adicionales"
            className="w-10 ml-2 rounded-sm border-2 border-black"
            value={formData.adicionales}
            onChange={handleChange}
          />
        </label>
        <label>
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
  );
}

export default FormComodato;
