import { Outlet, useLocation } from "react-router";
import { MegaMenuWithHover } from "../common/MegaMenuWithHover";
import { useEffect } from "react";

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [[pathname]]);

    return (
        <div className="relative grid min-h-[100vh] w-full bg-gradient-to-b from-green-100 to-gray-500">
            <MegaMenuWithHover />
            <Outlet />
        </div>
    );
}
