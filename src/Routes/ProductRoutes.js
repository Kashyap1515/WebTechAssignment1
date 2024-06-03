import { Route, Routes } from "react-router-dom";
import ProductList from "../Pages/ProductPages/ProductList";
import Product from "../Pages/ProductPages/Product";
import AddNewProduct from "../Pages/ProductPages/AddNewProduct";

export function ProductRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<ProductList />} />
                <Route path=":id" element={<Product />} />
                <Route path="add" element={<AddNewProduct />} />
            </Routes>
        </>
    );
}