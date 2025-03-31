import "./App.css";
import { Routes, Route, HashRouter } from "react-router";
import Layout from "./Layout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/Contact";
import Repositories from "./pages/Repositories/Repositories";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repositories" element={<Repositories />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
