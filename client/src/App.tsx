/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import LoginService from "./services/Login.service";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { GodamLocalStorage } from "./constants/constants";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage[GodamLocalStorage.acessToken] !== undefined
  );

  useEffect(() => {
    const validateUser = async () => {
      await LoginService.validateUserToken();
    };
    validateUser().then((r) => r);
  }, []);

  const handleLogout = async () => {
    await LoginService.logout();
  };

  return (
    <div className="App">
      <Header
        logoutHandler={handleLogout}
        username="username"
        isLoggedIn={isLoggedIn}
      />
      <div className="app-content h-bodyHeight">
        {isLoggedIn && (
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {AppRoutes?.filter(
              (f) => f.role && f.role.indexOf("user") >= 0
            ).map((item) => (
              <Route key={item.route} path={item.route} element={item.page} />
            ))}
            {AppRoutes?.filter(
              (f) => f.role && f.role.indexOf("vendor") >= 0
            ).map((item) => (
              <Route key={item.route} path={item.route} element={item.page} />
            ))}
          </Routes>
        )}

        {!isLoggedIn && (
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            {AppRoutes.filter((f: any) => f.role.indexOf("guest") >= 0).map(
              (item) => (
                <Route key={item.name} path={item.route} element={item.page} />
              )
            )}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
