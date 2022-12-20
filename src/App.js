import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import UserHistoryPage from "./pages/UserHistoryPage"
import RegisterPage from "./pages/RegisterPage"
import TodayPage from "./pages/TodayPage"
import HabitsPage from "./pages/HabitsPage"
import { useState } from "react";
import UserDetailsContext from "./contexts/UserDetailsContext";
import AuthContext from "./contexts/AuthContext";
import PercentageContext from "./contexts/PercentageContext";

export default function App() {
  const [userDetails, setUserDetails] = useState({});
  const [token, setToken] = useState("");
  const [percentage, setPercentage] = useState(0);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
        <PercentageContext.Provider value={{ percentage, setPercentage }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<RegisterPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/hoje" element={<TodayPage />} />
              <Route path="/historico" element={<UserHistoryPage />} />
            </Routes>
          </BrowserRouter>
        </PercentageContext.Provider>
      </UserDetailsContext.Provider>
    </AuthContext.Provider>
  );
}
