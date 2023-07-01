import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import District from "./components/dat/District";
import Place from "./components/dat/Place";
import Category from "./components/dat/Category";
import Subcategory from "./components/dat/Subcategory";
import Restaurant from "./components/dat/Restaurant";
import RecipeView from "./components/dat/RecipeView";
import User from "./components/dat/User";
import Guest from "../Guest/App";
import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "Aapp dark" : "Aapp"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/*" element={<Guest />} />
          <Route path="user" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="District" element={<District />} />
          <Route path="Place" element={<Place />} />
          <Route path="Category" element={<Category />} />
          <Route path="Subcategory" element={<Subcategory />} />
          <Route path="RecipeView" element={<RecipeView />} />
          <Route path="Restaurant" element={<Restaurant />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
