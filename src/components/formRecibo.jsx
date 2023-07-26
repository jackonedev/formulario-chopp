function FormRecibo({
  formData,
  setFormData,
  handlePostSubmit
}) {
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
          Monto Recibo:
          <input
            type="number"
            name="monto_recibo"
            placeholder="2000"
            required
            className="ml-2 rounded-sm border-2 border-black"
            value={formData.monto_recibo}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="m-2">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handlePostSubmit}
          >
            Enviar (POST)
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormRecibo;
