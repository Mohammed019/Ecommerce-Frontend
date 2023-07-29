// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home
import Home from "./pages/Home";
// import ProductDetails
import ProductDetails from "./pages/ProductDetails";
// import sidebar header footer from components
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
