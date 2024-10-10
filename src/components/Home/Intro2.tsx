export function Intro2() {
    return (
        <div className="grid min-h-[140px] grid-cols-2 sm:w-1/3 place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div></div>
            <div>
                <figure className="relative w-full h-96">
                    <img
                        className="object-contain object-center w-full h-full rounded-xl"
                        src="images/Landing/tap-2.JPG"
                        alt="nature image"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        {/* <div>
                        <h5 className="text-xl font-medium text-slate-800">Sara Lamalo</h5>
                        <p className="mt-2 text-slate-600">20 July 2022</p>
                    </div> */}
                        <h5 className="text-xl font-medium text-slate-800">Sink Tap</h5>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
