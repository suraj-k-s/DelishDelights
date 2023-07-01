import { Routes, Route } from "react-router-dom";
import Home from "./App";
import Recipe from "./Recipie/index";
import Order from "./Order/App";



function Index() {
    return (

        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/Recipie/*" element={<Recipe />} />
            <Route path="/Order/*" element={<Order />} />
        </Routes>

    );
}

export default Index;
