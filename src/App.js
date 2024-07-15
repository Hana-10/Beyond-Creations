import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Data from "./Data";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/Carousel" element={<Carousel/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;