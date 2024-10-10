import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import { MegaMenuWithHover } from "./components/common/MegaMenuWithHover";
import { API_URL } from "./constants";
import ProductView from "./components/ProductView/ProductView";

function Layout() {
    return (
        <div className="relative grid min-h-[100vh] w-full bg-gradient-to-b from-green-100 to-gray-500">
            <MegaMenuWithHover />
            <Outlet />
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/products">
                        <Route index element={<Product />} />
                        <Route
                            path=":productId"
                            element={<ProductView />}
                            loader={async ({ params }) => {
                                const data = await fetch(`${API_URL}/products/${params.productId}`);
                                return data;
                            }}
                        />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}
