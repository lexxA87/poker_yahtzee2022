import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";

import Game from "./components/Game";
import TestAnimation from "./components/testAnimation/TestAnimation";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Routes>
          <Route index path="/" element={<Game />} />
          <Route index path="/test" element={<TestAnimation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
