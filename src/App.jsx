import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px 0" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/code/:code" element={<StatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
