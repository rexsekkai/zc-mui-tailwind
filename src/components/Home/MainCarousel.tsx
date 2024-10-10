import { Carousel } from "@material-tailwind/react";

export function MainCarousel() {
    return (
        // <Carousel
        //     // autoplay

        //     loop
        //     transition={{ duration: 1, type: "tween" }}
        //     className="mx-auto h-96"
        // >
        <img
            src="/images/Landing/banner (1).jpg"
            alt="image 1"
            className="h-auto sm:h-min w-full object-contain sm:object-cover sm:object-top"
        />
        // </Carousel>
    );
}
