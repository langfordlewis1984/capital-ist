import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Play from "./pages/Play/Play";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capitalist" element={<Play />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
