import "./App.css";
import "./components/form/addressForm";
import AddressForm from "./components/form/addressForm";
import Navbar from "./components/form/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddressForm />
    </div>
  );
}

export default App;
