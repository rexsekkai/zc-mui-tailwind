import { Carousel } from "@material-tailwind/react";
import landingJpg from "../../images/Landing.jpg";

export function MainCarousel() {
    return (
        // <Carousel
        //     // autoplay

        //     loop
        //     transition={{ duration: 1, type: "tween" }}
        //     className="mx-auto h-96"
        // >
        <img
            src={landingJpg}
            alt="image 1"
            className="h-auto sm:h-min w-full object-contain sm:object-cover sm:object-top"
        />
        // </Carousel>
    );
}
