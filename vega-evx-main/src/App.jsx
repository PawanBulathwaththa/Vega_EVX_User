import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Models from "./pages/Models";
import Order from "./pages/Order";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import CarForm from "./pages/CarForm";


function App() {
  return (
    <Router>
      <Header /> {/* Add Header */}
      <main style={{ padding: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CarForm" element={<CarForm />} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;
