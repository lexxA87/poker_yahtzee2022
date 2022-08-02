import { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { userAuth } from "./api/userAPI.js";
import { useTheme } from "./data/stores/useTheme";
import { useCurrentUserStore } from "./data/stores/useCurrentUserStore";
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
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);
  const isAuth = useCurrentUserStore((state) => state.isAuth);
  const setIsAuth = useCurrentUserStore((state) => state.setIsAuth);
  const isTheme = useTheme((state) => state.isTheme);

  const authUserWithToken = async () => {
    if (localStorage.getItem("token")) {
      const user = await userAuth();
      if (user.name) {
        setCurrentUser(user);
        setIsAuth(true);
      }
    }
  };

  useEffect(() => {
    authUserWithToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isTheme;
  }, [isTheme]);

  return (
    <StartPageAnimation>
      <AnimatedRoutes>
        <Route path="/" element={<Menu />} />
        {isAuth ? (
          <>
            <Route path="/game" element={<MainGamePage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </>
        )}

        <Route path="/rating" element={<RatingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </AnimatedRoutes>
    </StartPageAnimation>
  );
}

export default App;
