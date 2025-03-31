import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/Contact";
import Repositories from "./pages/Repositories/Repositories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chris-portfolio/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="/chris-portfolio/contact" element={<Contact />} />
          <Route
            path="/chris-portfolio/repositories"
            element={<Repositories />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
