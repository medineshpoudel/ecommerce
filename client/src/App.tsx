import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes/routes";
import { Route, Routes } from "react-router-dom";

function App() {
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
      <ToastContainer />
    </div>
  );
}

export default App;
