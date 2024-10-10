import { API_URL } from "../constants";

export interface Category {
    id: string;
    name: string;
}
export interface Product {
    id: string;
    name: string;
    src: string;
    categoryId: string;
}

export interface ProductData {
    products: Product[];
    categories: Category[];
}
export const getProducts = async (categoryId?: string): Promise<ProductData | null> => {
    if (!categoryId) {
        return null;
    }
    const categories = await (await fetch(`${API_URL}/categories`)).json();
    const products = await (await fetch(`${API_URL}/products?categoryId=${categoryId}`)).json();

    return { categories, products };
};

export const getProductDetail = async ({ params }) => {
    const data = await fetch(`${API_URL}/products/${params.productId}`);
    return data;
};
