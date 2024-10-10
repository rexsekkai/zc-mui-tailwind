import { FadeInWhenVisible } from "../common/FadeInWhenVisible";
import { ContactUsFooter } from "./ContactUsFooter";
import { FeaturedSection } from "./FeaturedSection";
import { GalleryWithTabs } from "./GalleryWithTabs";
import { MainCarousel } from "./MainCarousel";

export default function Home() {
    return (
        <>
            <div>
                <MainCarousel />
            </div>
            <div className="flex-col gap-2 p-6 text-center w-full mx-auto bg-gray-300 sm:overflow-auto">
                <FadeInWhenVisible>
                    <FeaturedSection />
                    {/* <Intro2 /> */}
                </FadeInWhenVisible>
            </div>
            {/* <div className="flex-col gap-2 p-6 text-center w-full mx-auto bg-blue-gray-50"> */}
            {/* <div className="flex flex-row py-12">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <MasonryGridGallery />
            </motion.div>
        </div> */}
            {/* <Typography variant="h1" color="blue-gray">
            Material Tailwind React
        </Typography>
        <Typography
            variant="lead"
            color="blue-gray"
            className="opacity-70"
           
        >
            An easy to use components library for Tailwind CSS and React.
        </Typography> */}
            {/* </div> */}
            <div className="p-6 sm:p-12 bg-blue-gray-50">
                <GalleryWithTabs />
            </div>
            <div className="p-6 sm:p-12 bg-gray-500">
                {/* <Footer /> */}
                <FadeInWhenVisible>
                    <ContactUsFooter />
                </FadeInWhenVisible>
            </div>
        </>
    );
}
