import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import { getHome } from "./routes/HomeLoader";
import { getProducts } from "./routes/ProductLoader";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/zc-web",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
                loader: getHome,
            },
            {
                path: "products",
                children: [
                    {
                        path: ":categoryId",
                        element: <Product />,
                        loader: ({ params }) => getProducts(params.categoryId),
                        children: [{ path: ":productId" }],
                    },
                ],
            },
        ],
    },
]);

export default router;
