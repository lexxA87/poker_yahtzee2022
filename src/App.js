import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";

import Game from "./components/Game";
import Menu from "./components/menu/Menu";
import TestAnimation from "./components/testAnimation/TestAnimation";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Routes>
          <Route index path="/" element={<Game />} />
          <Route index path="/test" element={<TestAnimation />} />
          <Route index path="/menu" element={<Menu />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
