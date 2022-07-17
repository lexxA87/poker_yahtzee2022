import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
