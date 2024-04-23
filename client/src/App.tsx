/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import LoginService from "./services/Login.service";
import { GodamLocalStorage } from "./constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setUser } from "./features/user/userSlice";

function App() {
  const { username, role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      if (localStorage.getItem(GodamLocalStorage.isLoggedIn)) {
        const { data: userData } = await LoginService.getUserInfo();
        dispatch(setUser(userData));
      }
    };
    getUserInfo().then((r) => r);
  }, []);
  console.log(username, role);

  return (
    <div className="App">
      <Header />
      <div className="app-content h-bodyHeight">
        <Routes>
          {AppRoutes.map((routeItem) => (
            <Route
              key={routeItem.route}
              path={routeItem.route}
              element={routeItem.page}
            />
          ))}
        </Routes>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
