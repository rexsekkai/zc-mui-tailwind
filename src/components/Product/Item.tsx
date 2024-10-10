import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import { Product } from "../../routes/ProductLoader";

export function EcommerceCard({ product, onClick }) {
    const { id, name, src } = product;

    return (
        <Card
            className="cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
            onClick={onClick}
        >
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    // src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                    src={src}
                    alt="card-image"
                    className="h-full w-full object-cover object-top"
                />
            </CardHeader>
            <CardBody className="py-2 px-6">
                <div className="mb-2 flex items-center justify-between">
                    {name && (
                        <Typography color="blue-gray" className="font-medium">
                            {name}
                        </Typography>
                    )}
                    {/* <Typography color="blue-gray" className="font-medium">
                        $95.00
                    </Typography> */}
                </div>
                {/* <Typography variant="small" color="gray" className="font-normal opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and an
                    available wireless charging case.
                </Typography> */}
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

export function Item(product: Product) {
    const { id, name, src } = product;
    const [open, setOpen] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);

    return (
        <>
            <EcommerceCard onClick={handleOpen} product={product} />
            {/* <img
                    alt="nature"
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                /> */}
            <Dialog size="xl" open={open} handler={handleOpen} className="rounded-lg">
                <DialogHeader className="justify-between bg-blue-gray-50 rounded-t-lg">
                    <div className="flex items-center gap-1">
                        {name && (
                            <Typography variant="h6" color="blue-gray" className="font-medium">
                                {name}
                            </Typography>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <IconButton variant="text" size="md" color="blue-gray" onClick={handleOpen}>
                            <img src="/icons/close.svg" />
                        </IconButton>
                    </div>
                </DialogHeader>
                <DialogBody className="p-0">
                    <img
                        alt="nature"
                        className="h-[80vh] w-full rounded-lg object-contain object-center"
                        src={src}
                    />
                </DialogBody>
                {/* <DialogFooter className="justify-between"></DialogFooter> */}
            </Dialog>
        </>
    );
}
