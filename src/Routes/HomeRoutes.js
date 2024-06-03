import { Route, Routes } from "react-router-dom";
import About from "../Pages/OtherPages/About";
import NotFound from "../Pages/OtherPages/NotFound";
import Home from "../Pages/HomePages/Home";
import { ProductRoutes } from "./ProductRoutes";

export function HomeRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/product/*" element={<ProductRoutes />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}