import {
    Bars3Icon,
    Bars4Icon,
    ChevronDownIcon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Navbar,
    Typography,
    Collapse,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    IconButton,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    },
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: RectangleGroupIcon,
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(({ icon, title, description }, key) => (
        <a href="#" key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2 ">
                    {" "}
                    {React.createElement(icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6",
                    })}
                </div>
                <div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                    >
                        {description}
                    </Typography>
                </div>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Resources
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 justify-end">
            {/* <NavListMenu /> */}
            <ListItem className="gap-2 py-2 pr-4">
                <Link type="" to="/#contact-us" className="font-medium text-blue-gray-900">
                    Contact Us
                </Link>
            </ListItem>
        </List>
    );
}

export function MegaMenuWithHover() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    return (
        <Navbar className="sticky top-0 z-10 mx-auto px-10 py-2" fullWidth>
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    href=""
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2 italic"
                >
                    <Link to="">Zaac</Link>
                </Typography>
                {/* <div className="hidden lg:block">
                    <NavList />
                </div> */}
                {/* <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton> */}
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
