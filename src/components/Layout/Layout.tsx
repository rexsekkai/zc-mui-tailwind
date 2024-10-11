import { Outlet, useLocation } from "react-router";
import { MegaMenuWithHover } from "../common/MegaMenuWithHover";
import { useEffect, useState } from "react";
import { NavCategory, NavContext } from "../../NavContextManagement";

export default function Layout() {
    const { pathname } = useLocation();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState<NavCategory[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [[pathname]]);

    return (
        <div className="relative grid min-h-[100vh] w-full bg-gradient-to-b from-green-100 to-gray-500">
            <NavContext.Provider
                value={{ categories, setCategories, selectedCategory, setSelectedCategory }}
            >
                <MegaMenuWithHover />
                <Outlet />
            </NavContext.Provider>
        </div>
    );
}
