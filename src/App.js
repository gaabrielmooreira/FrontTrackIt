import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import UserHistoryPage from "./pages/UserHistoryPage"
import RegisterPage from "./pages/RegisterPage"
import TodayPage from "./pages/TodayPage"
import HabitsPage from "./pages/HabitsPage"
import { useState } from "react";
import UserDetailsContext from "./contexts/UserDetailsContext";
import AuthContext from "./contexts/AuthContext";

export default function App() {
  const [userDetails, setUserDetails] = useState({});
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider value={{token,setToken}}>
      <UserDetailsContext.Provider value={{userDetails,setUserDetails}} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<UserHistoryPage />} />
          </Routes>
        </BrowserRouter>
      </UserDetailsContext.Provider>
    </AuthContext.Provider>
  );
}
