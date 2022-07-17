import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import MainGamePage from "./components/game/MainGamePage";
import RatingPage from "./components/ratingPage/RatingPage";
import LoginPage from "./components/authorization/LoginPage";
import RegistrationPage from "./components/authorization/RegistrationPage";
import StartPage from "./components/StartPage";
import StatisticsPage from "./components/statisticsPage/StatisticsPage";
import SettingsPage from "./components/settingsPage/SettingsPage";

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
      <Route index path="/settings" element={<SettingsPage />} />
      <Route index path="/statistics" element={<StatisticsPage />} />
      <Route index path="/rating" element={<RatingPage />} />
      <Route index path="/login" element={<LoginPage />} />
      <Route index path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
