import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

export function HorizontalCard() {
    return (
        <Card id="contact-us" className="w-full max-w-[48rem] flex-row mx-auto">
            {/* <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader> */}
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Contact Us
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Don't hesitate to reach out with the contact information below
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    <a className="underline" href="mailto:wemahomeplt@gmail.com">
                        wemahomeplt@gmail.com
                    </a>
                    <br />
                    <br />
                    +(60)16-244 9268
                    <br />
                    <br />
                    <span className="text-sm">Monday 9:00 am — 5:00 pm</span>
                    <br />
                    <span className="text-sm">Tuesday 9:00 am — 5:00 pm</span>
                    <br />
                    <span className="text-sm">Wednesday 9:00 am — 5:00 pm</span>
                    <br />
                    <span className="text-sm">Thursday 9:00 am — 5:00 pm</span>
                    <br />
                    <span className="text-sm">Friday 9:00 am — 5:00 pm</span>
                    <br />
                    <span className="text-sm">Saturday (Closed)</span>
                    <br />
                    <span className="text-sm">Sunday (Closed)</span>
                    <br />
                </Typography>
                <a href="https://www.facebook.com/wemahomeplt" className="inline-block">
                    <Button className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="25"
                            height="25"
                            viewBox="0 0 30 30"
                            style={{ fill: "#FFFFFF" }}
                        >
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                        </svg>
                        Visit our Facebook
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}

export function ContactUsFooter() {
    return <HorizontalCard />;

    // <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
    //     <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
    //         <div
    //             className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
    //             style={{ flexBasis: "60%" }}
    //         >
    //             <h3 className="font-semibold leading-snug tracking-normal text-slate-800 mx-auto my-6 w-full text-xl max-w-lg lg:max-w-2xl lg:text-3xl">
    //                 Contact Us
    //             </h3>
    //         </div>
    //     </div>

    //     <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
    //         <p className="font-normal leading-relaxed mx-auto text-slate-500 lg:text-lg text-base max-w-3xl">
    //             Don't hesitate to reach out with the contact information below
    //         </p>
    //         <p>
    //             <a href="mailto:wemahomeplt@gmail.com">wemahomeplt@gmail.com</a>
    //             <br />
    //             016-244 9268
    //         </p>

    //         <div className="jetpack-business-hours__item">
    //             <dt className="Mon">Monday</dt>
    //             <dd className="Mon">9:00 am – 5:00 pm</dd>
    //         </div>
    //         <div className="jetpack-business-hours__item">
    //             <dt className="Tue">Tuesday</dt>
    //             <dd className="Tue">9:00 am – 5:00 pm</dd>
    //         </div>
    //         <div className="jetpack-business-hours__item">
    //             <dt className="Wed">Wednesday</dt>
    //             <dd className="Wed">9:00 am – 5:00 pm</dd>
    //         </div>
    //         <div className="jetpack-business-hours__item">
    //             <dt className="Thu">Thursday</dt>
    //             <dd className="Thu">9:00 am – 5:00 pm</dd>
    //         </div>
    //         <div className="jetpack-business-hours__item">
    //             <dt className="Fri">Friday</dt>
    //             <dd className="Fri">9:00 am – 5:00 pm</dd>
    //         </div>
    //         <div className="jetpack-business-hours__item">
    //             <dt className="Sat">Saturday</dt>
    //             <dd className="Sat">Closed</dd>
    //         </div>
    //         <div className="jetpack-business-hours__item">
    //             <dt className="Sun">Sunday</dt>
    //             <dd className="Sun">Closed</dd>
    //         </div>
    //     </div>
    // </div>
    // );
}
