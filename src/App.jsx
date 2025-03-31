import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Layout from "./Layout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/Contact";
import Repositories from "./pages/Repositories/Repositories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repositories" element={<Repositories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
