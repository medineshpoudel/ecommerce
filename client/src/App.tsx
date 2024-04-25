/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/routes";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginService from "./services/Login.service";
import { GodamLocalStorage } from "./constants/constants";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem(GodamLocalStorage.isAdmin);

  useEffect(() => {
    const loggedIn = localStorage.getItem(GodamLocalStorage.isLoggedIn);
    if (loggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    await LoginService.logout();
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="App">
      <Header
        logoutHandler={handleLogout}
        username="username"
        isLoggedIn={isLoggedIn}
      />
      <div className="app-content h-bodyHeight">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {AppRoutes?.filter((f) => f.role && f.role.indexOf("user") >= 0).map(
            (item) => (
              <Route key={item.route} path={item.route} element={item.page} />
            )
          )}
          {AppRoutes?.filter(
            (f) => f.role && f.role.indexOf("vendor") >= 0
          ).map((item) => (
            <Route key={item.route} path={item.route} element={item.page} />
          ))}
        </Routes>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
