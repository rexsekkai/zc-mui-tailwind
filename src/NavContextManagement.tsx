import { createContext, useContext } from "react";

export interface NavCategory {
    id: string;
    name: string;
}
export type NavContent = {
    categories: NavCategory[];
    selectedCategory: string;
    setCategories: (categories: NavCategory[]) => void;
    setSelectedCategory: (categoryId: string) => void;
};

export const NavContext = createContext<NavContent>({
    categories: [],
    selectedCategory: "",
    setCategories: () => {},
    setSelectedCategory: () => "",
});

export const useNavContext = () => useContext(NavContext);
