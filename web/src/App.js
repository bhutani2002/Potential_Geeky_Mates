import "./App.css";
import "./components/form/addressForm";
import AddressForm from "./components/form/addressForm";
import Navbar from "./components/form/navbar";
import Footer from "./components/form/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddressForm />
      <Footer />
    </div>
  );
}

export default App;
