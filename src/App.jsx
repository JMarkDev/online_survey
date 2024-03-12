import "./App.css";
import Survey from "./pages/Survey";
import Dashboard from "./pages/Dashboard";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Survey />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
