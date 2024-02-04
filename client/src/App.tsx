import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { RootState } from "../app/store";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { increamentByAmount } from "./features/counter/counterSlice";
import useApp from "./hooks/useApp";
import viteLogo from "/vite.svg";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data } = useApp({ query: "debts" });
  console.log(data);

  return (
    <>
      <div className="header">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increamentByAmount(2))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ToastContainer />
    </>
  );
}

export default App;
