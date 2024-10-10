import React, { useEffect } from "react";
import {
    List,
    Card,
    Alert,
    Avatar,
    ListItem,
    Accordion,
    Typography,
    AccordionBody,
    ListItemPrefix,
    AccordionHeader,
} from "@material-tailwind/react";
import {
    TicketIcon,
    UserGroupIcon,
    Square2StackIcon,
    RectangleGroupIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Category } from "../../routes/ProductLoader";
import { useNavigate } from "react-router";

interface CategoryListProps {
    selectedCategory: string;
    categories: Category[];
}
export default function CategoryList(props: CategoryListProps) {
    const [open, setOpen] = React.useState(0);
    const navigate = useNavigate();
    const [openAlert, setOpenAlert] = React.useState(true);
    const { selectedCategory, categories } = props;
    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const LIST_ITEM_STYLES =
        "select-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 data-[selected=true]:text-gray-900";

    return (
        <Card className="sticky top-16 w-full max-w-[20rem] mx-auto p-6 shadow-md">
            <div className="mb-2 flex items-center gap-4 p-4">
                <RectangleGroupIcon className="h-5 w-5" />

                <Typography color="blue-gray" className="text-lg font-bold">
                    Browse by Categories
                </Typography>
            </div>
            <hr className="my-2 border-gray-200" />
            <List>
                {categories.map((category: Category) => (
                    <ListItem
                        key={category.id}
                        className={LIST_ITEM_STYLES}
                        selected={category.id == selectedCategory}
                        onClick={() => navigate(`/zc-web/products/${category.id}/1`)}
                    >
                        <ListItemPrefix>
                            <Square2StackIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        {category.name}
                    </ListItem>
                ))}
            </List>
        </Card>
    );
}
