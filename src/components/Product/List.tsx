import { Card } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Item } from "./Item";
import { useLoaderData } from "react-router";
import { ProductData } from "../../routes/ProductLoader";
import { FadeInWhenVisible } from "../common/FadeInWhenVisible";

export default function List() {
    const data = useLoaderData() as ProductData;

    return (
        <Card className="grid grid-cols-1 lg:grid-cols-3 gap-x-2 px-4">
            {data.products &&
                data.products.map((product) => (
                    <div key={product.id} className="m-1">
                        <FadeInWhenVisible>
                            <Item {...product} />
                        </FadeInWhenVisible>
                    </div>
                ))}
        </Card>
    );
}
