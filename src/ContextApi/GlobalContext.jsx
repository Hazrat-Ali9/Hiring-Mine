import { createContext } from "react";

export const GlobalContext = createContext();

export const initialState = {
  jobs: [],
  theme: "light",
  latestJobs: [],
};
