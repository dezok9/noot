import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<LandingPage />} path="/landing" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
