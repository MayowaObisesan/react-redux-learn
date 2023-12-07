const HomeCarousel = () => {
    return (
        <section>
            <div className="carousel w-full h-[640px] font-sans">
                <div id="item1" className="flex flex-col justify-center carousel-item w-full">
                    <div className="text-center w-full text-5xl leading-normal">
                        Every
                        <div className={"text-9xl font-black py-8"}>Made-in-Naija</div>
                        Apps in one place
                    </div>
                    {/* <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
                </div>
                <div id="item2" className="flex flex-col justify-center carousel-item w-full">
                    <div className="text-center w-full text-5xl leading-normal">
                        List
                        <div className={"text-9xl font-black py-8"}>Your Apps</div>
                        for others to find
                    </div>
                    {/* <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}
                </div>
                <div id="item3" className="flex flex-col justify-center carousel-item w-full">
                    <div className="text-center w-full text-5xl leading-normal">
                        List
                        <div className={"text-9xl font-black py-8"}>Your Apps</div>
                        for others to find
                    </div>
                    {/* <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" /> */}
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </section>
    );
}

export default HomeCarousel;