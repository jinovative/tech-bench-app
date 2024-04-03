import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./Navigation";

function App() {
  return (
    <div className="d-flex">
      <Nav />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/Navigation" />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
