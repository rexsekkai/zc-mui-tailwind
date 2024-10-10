import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeInWhenVisible } from "../common/FadeInWhenVisible";
import { API_URL } from "../../constants";
interface GalleryImage {
    src: string;
}

interface GalleryData {
    id: string;
    label: string;
    value: string;
    images: GalleryImage[];
}
// export function GalleryWithTabs() {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     useEffect(() => console.log("isInView", isInView), [isInView]);
//     return (
//         <section
//             ref={ref}
//             style={{
//                 height: "30rem",
//             }}
//         >
//             <span
//                 style={{
//                     transform: isInView ? "none" : "translateX(-200px)",
//                     opacity: isInView ? 1 : 0,
//                     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//                 }}
//             >
//                 test
//             </span>
//         </section>
//     );
// }

const ImageGridItem = ({ src }) => {
    return (
        <div className="">
            <img
                className="h-auto max-w-full rounded-lg object-contain sm:object-cover object-top"
                src={src}
                alt="gallery-photo"
            />
        </div>
    );
};

export function GalleryWithTabs() {
    const ref = useRef(null);
    const url = `${API_URL}/gallery`;
    const [data, setData] = useState<GalleryData[]>([]);

    useEffect(() => {
        getGallery();
    }, []);
    const getGallery = async () => {
        const data = await fetch(url);
        const response = await data.json();

        setData(response);
    };

    return (
        data.length > 0 && (
            <div ref={ref}>
                <FadeInWhenVisible>
                    <h1 className="font-bold leading-snug tracking-tight text-slate-800 mx-auto my-6 mb-10 w-full text-2xl lg:max-w-3xl lg:text-5xl">
                        Hundreds of Designs to express your Artistic Side
                    </h1>
                    <Tabs value={data[0]?.value}>
                        <TabsHeader>
                            {data.map((category) => (
                                <Tab key={category.value} value={category.value}>
                                    {category.label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody className="grid grid-cols-1 gap-4 ">
                            {data.map((category) => (
                                <TabPanel
                                    className="grid gap-4 bg-gray-50 rounded"
                                    key={category.value}
                                    value={category.value}
                                >
                                    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                        <div className="grid gap-4">
                                            <ImageGridItem src={category.images[0].src} />
                                            <ImageGridItem src={category.images[1].src} />
                                            <ImageGridItem src={category.images[2].src} />
                                        </div>
                                        <div className="grid gap-4">
                                            <ImageGridItem src={category.images[3].src} />
                                            <ImageGridItem src={category.images[4].src} />
                                            <ImageGridItem src={category.images[5].src} />
                                        </div>
                                        <div className="grid gap-4">
                                            <ImageGridItem src={category.images[6].src} />
                                            <ImageGridItem src={category.images[7].src} />
                                            <ImageGridItem src={category.images[8].src} />
                                        </div>
                                    </div>
                                    {/* {images?.map(({ imageLink }, index) => (
                            <div key={index}>
                                <img
                                    className="h-40 sm:h-72 w-full max-w-full rounded-lg object-cover object-top"
                                    src={imageLink}
                                    alt="image-photo"
                                />
                            </div>
                        ))} */}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </FadeInWhenVisible>
            </div>
        )
    );
}
