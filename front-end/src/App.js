import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin/App";
import User from "./User/Index";
import Restaurant from "./Restaurant/temp/App";
import Guest from "./Guest/App";
import Like from "./User/pages/Like";
import ResRegisterBg from "./Restaurant/Components/ResRegisterBg";



export default function App() {
  return (
    <Routes>
      <Route path="/Admin/*" element={<Admin />} />
      <Route path="/User/*" element={<User />} />
      <Route path="/Restaurant/*" element={<Restaurant />} />
      <Route path="/*" element={<Guest />} />
      <Route path="/like" element={<Like />} />
      <Route path="/Res" element={<ResRegisterBg />} />
    </Routes>
  );
}
