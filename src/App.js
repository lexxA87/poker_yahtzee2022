import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import MainGamePage from "./components/game/MainGamePage";

import StartPage from "./components/StartPage";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#212529";

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<StartPage />} />
      <Route index path="/game" element={<MainGamePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
