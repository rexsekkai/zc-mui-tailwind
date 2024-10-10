import React, { useEffect } from "react";
import { useLoaderData } from "react-router";

export default function ProductView() {
    const data = useLoaderData();
    useEffect(() => console.log("data", data), [data]);
    return <div>ProductView</div>;
}
