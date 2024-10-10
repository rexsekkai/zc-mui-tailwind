import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../../constants";
interface GalleryImage {
    categoryId: string;
    id: string;
    src: string;
    name: string;
    description: string;
}

interface GalleryData {
    id: string;
    label: string;
    value: string;
    images: GalleryImage[];
}

function EcommerceCard({ categoryId, id, src, name, description }) {
    const navigate = useNavigate();

    return (
        <Card
            className="my-6 cursor-pointer shadow-2xl hover:shadow-[#e0e3dd]"
            onClick={() => navigate(`products/${categoryId}/${id}`)}
        >
            <CardHeader shadow={false} floated={false} className="h-96">
                <img src={src} alt="card-image" className="h-full w-full object-cover object-top" />
            </CardHeader>
            <CardBody>
                {name && (
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            {name}
                        </Typography>
                        {/* <Typography color="blue-gray" className="font-medium">
                        $95.00
                    </Typography> */}
                    </div>
                )}
                {description && (
                    <Typography variant="small" color="gray" className="font-normal opacity-75">
                        {description}
                    </Typography>
                )}
            </CardBody>
            {/* <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    Add to Cart
                </Button>
            </CardFooter> */}
        </Card>
    );
}
export function FeaturedSection() {
    const url = `${API_URL}/gallery`;
    const [data, setData] = useState<GalleryImage[]>([]);

    useEffect(() => {
        getGallery();
    }, []);
    const getGallery = async () => {
        const data = await fetch(url);
        const response = await data.json();

        setData(response[0].images);
    };

    return (
        <div className="p-0 sm:px-24">
            <h1 className="font-bold leading-snug tracking-tight text-slate-800 mx-auto my-6 w-full text-2xl lg:max-w-3xl lg:text-5xl">
                Featured Items
            </h1>
            {data.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 mx-auto">
                    <EcommerceCard {...data[0]} />
                    <EcommerceCard {...data[1]} />
                    <EcommerceCard {...data[2]} />
                </div>
            )}
        </div>
    );
}
