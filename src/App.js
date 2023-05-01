import "./App.css";
import "../src/assets/css/Root.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Market from "./components/Market";
import Users from "./components/Users";
import Apporoch from "./components/Apporoch";
import Started from "./components/Started";
import Deals from "./components/Deals";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Apporoch />
      <Deals />
      <Started />
      <Market />
      <Users />
      <Footer />
    </>
  );
}

export default App;
