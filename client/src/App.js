import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFoudPage from "./pages/NotFoudPage";

const App = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoudPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
