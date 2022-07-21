import { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { useTheme } from "./data/stores/useTheme";
import MainGamePage from "./components/game/MainGamePage";
import RatingPage from "./components/ratingPage/RatingPage";
import LoginPage from "./components/authorization/LoginPage";
import RegistrationPage from "./components/authorization/RegistrationPage";
import StatisticsPage from "./components/statisticsPage/StatisticsPage";
import SettingsPage from "./components/settingsPage/SettingsPage";
import AnimatedRoutes from "./components/animations/AnimatedRoutes";
import StartPageAnimation from "./components/animations/startPageAnimation/StartPageAnimation";
import Menu from "./components/menu/Menu";

function App() {
  const isTheme = useTheme((state) => state.isTheme);

  useEffect(() => {
    document.body.style.backgroundColor = isTheme;
  }, [isTheme]);

  return (
    <StartPageAnimation>
      <AnimatedRoutes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<MainGamePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </AnimatedRoutes>
    </StartPageAnimation>
  );
}

export default App;
