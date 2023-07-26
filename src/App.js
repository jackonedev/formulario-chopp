import logo from './logo.svg';
import './App.css';
// import FormCliente from './components/formCliente';
import FormContainer from './components/container/formContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: "220px" }} />
      </header>
      <div className="form-container">
        <FormContainer/>
      </div>
    </div>
  );
}

export default App;

