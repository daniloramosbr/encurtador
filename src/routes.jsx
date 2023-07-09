import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Links from "./pages/links/links";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/encurtador" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
