import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FormPage from "./FormPage";
import ResultPage from "./ResultPage";

function App() {
  return (
    <div>
      <nav style={{
  padding: "15px",
  background: "linear-gradient(90deg, #667eea, #764ba2)",
  display: "flex",
  justifyContent: "center",
  gap: "30px"
}}>
  <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
  <Link to="/form" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Planner</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;