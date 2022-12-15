import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import UserHistoryPage from "./pages/UserHistoryPage"
import RegisterPage from "./pages/RegisterPage"
import TodayPage from "./pages/TodayPage"
import HabitsPage from "./pages/HabitsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<RegisterPage/>} />
        <Route path="/habitos" element={<HabitsPage/>} />
        <Route path="/hoje" element={<TodayPage/>} />
        <Route path="/historico" element={<UserHistoryPage/>} />      
      </Routes>
    </BrowserRouter>
  );
}
