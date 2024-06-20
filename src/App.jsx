import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import { GlobalContext, initialState } from "./ContextApi/GlobalContext";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "CHANGE_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "CHANGE_LATEST_JOBS":
      return {
        ...state,
        latestJobs: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <GlobalContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Jobs/:jobName" element={<Jobs />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
