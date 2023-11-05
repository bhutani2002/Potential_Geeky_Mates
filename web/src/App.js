import "./App.css";
import AddressForm from "./components/form/addressForm";
import Navbar from "./components/form/navbar";
import Footer from "./components/form/footer";
import DestinationCard from "./components/form/Card";
import DataTable from "./components/form/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DestinationCard />
      <AddressForm />
      <DataTable />
      <Footer />
    </div>
  );
}

export default App;
