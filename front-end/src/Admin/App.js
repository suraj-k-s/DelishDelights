import React from "react";
import { DarkModeContextProvider } from "./context/darkModeContext";
import Appm from "./Main";

export default function App() {
  return (
    <DarkModeContextProvider>
      <Appm />
    </DarkModeContextProvider>
  );
}
