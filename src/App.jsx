import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";
import RedirectPage from "./pages/RedirectPage";   // ⭐ new import

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px 0" }}>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Frontend redirect -> opens original long URL */}
          <Route path="/:code" element={<RedirectPage />} />   {/* ⭐ new route */}

          {/* Stats page */}
          <Route path="/code/:code" element={<StatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
