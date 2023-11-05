import "./App.css";
import AddressForm from "./components/addressForm";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DestinationCard from "./components/Card";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DestinationCard />
      <AddressForm />
      <Footer />
    </div>
  );
}

export default App;
