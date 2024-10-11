import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router";
import { MainCarousel } from "../Home/MainCarousel";
import { FadeInWhenVisible } from "../common/FadeInWhenVisible";
import { FeaturedSection } from "../Home/FeaturedSection";
import List from "./List";
import CategoryList from "./CategoryList";
import { ProductData } from "../../routes/ProductLoader";
import { NavContext, useNavContext } from "../../NavContextManagement";

export default function Product() {
    const { categories, products } = useLoaderData() as ProductData;

    const { setCategories } = useNavContext();

    useEffect(() => {
        setCategories(categories);
    }, [categories]);

    return (
        <div>
            <div className="flex gap-4 p-4">
                <div className="hidden sm:block">
                    <CategoryList
                        categories={categories}
                        selectedCategory={products[0].categoryId}
                    />
                </div>
                <div className="flex">
                    <List />
                </div>
            </div>
            <Outlet />
        </div>
    );
}
