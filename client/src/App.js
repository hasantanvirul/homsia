import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects/:id" element={<Project />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
