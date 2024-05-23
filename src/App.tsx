/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "../app/store";
import Header from "./components/header/Header";
import { GodamLocalStorage } from "./constants/constants";
import AppRoutes from "./routes/routes";
import LoginService from "./services/Login.service";
import NotifactionService from "./services/Notification.service";

function App() {
  const cart = useSelector((state: RootState) => state.cart);
  const [isLoggedIn] = useState(
    localStorage[GodamLocalStorage.acessToken] !== undefined
  );
  const [userNotification, setUserNotification] = useState<any>();

  useEffect(() => {
    const validateUser = async () => {
      await LoginService.validateUserToken();
    };
    validateUser().then(() => {
      const getUserNotification = async () => {
        const notificaiton = await NotifactionService.getUserNotification();
        setUserNotification(notificaiton);
      };
      getUserNotification();
    });
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
        userNotification={userNotification}
        productsInCart={cart.length}
      />

      <div className="app-content h-bodyHeight" style={{ marginTop: 60 }}>
        {isLoggedIn && (
          <Routes>
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
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
            {AppRoutes.filter((f: any) => f.role.indexOf("guest") >= 0).map(
              (item) => (
                <Route key={item.name} path={item.route} element={item.page} />
              )
            )}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
