import "./App.css";
import AddressForm from "./components/addressForm";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DestinationCard from "./components/Card";
import DataTable from "./components/Table";
import HeroSection from "./components/HeroSection";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DestinationCard />
      <AddressForm setData={setData} />
      <DataTable data={data} />
      <Footer />
    </div>
  );
}

export default App;
