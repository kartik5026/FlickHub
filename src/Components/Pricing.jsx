function Pricing() {
    return (
        <div className="w-full max-h-[500px] overflow-y-scroll  no-scrollbar">
            <div className="bg-[url('/heroImage.jpg')] w-[100%] h-[50%] bg-cover bg-center text-center text-white  ">
                <h1 className="md:text-6xl text-lg pt-28 tracking-wider">Our Plans</h1>
                <a href="/" className="text-red-500 p-1">Home</a><span>  |  Pricing</span>
            </div>
             
            <div className="mt-20">
                <div className="text-center ">
                    <h3 className="text-gray-600 tracking-wide">Our Pricing Plans</h3>
                    <h1 className="md:text-4xl text-lg tracking-wider">Our Pricing Strategy</h1>
                    <div className="border border-[#E4003A] border-b-8 rounded-lg w-[15%]  mx-auto mt-2"></div>
                </div>
                <div className="flex flex-wrap justify-evenly mt-8 md:text-[15px] text-xs ">
                    <div className="hover:border border-[#E4003A] h-96 m-4 p-8 w-72  text-center bg-gray-950 rounded-lg transition-all ease-in-out hover:scale-110 duration-300">
                        <h1 className="p-4">PREMIUM</h1>
                        <div className="bg-[#E4003A] w-32 rounded-xl mx-auto p-4 mt-2">
                            <h1>$7.99</h1>
                            <p>Monthly</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Video Quality</p>
                            <p>Good</p>

                        </div>
                        <div className="flex justify-between p-1">
                            <p>Resolution</p>
                            <p>480</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Screen You Can Watch</p>
                            <p>1</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Cancel Anytime</p>

                        </div>
                        <div>
                            <button className="mt-5 bg-[#E4003A] rounded-xl p-2">Buy Now</button>
                        </div>
                    </div>
                    <div className="border border-[#E4003A] h-96 p-8 m-4 w-72 text-center bg-gray-950 rounded-lg transition-all ease-in-out hover:scale-110 duration-300">
                        <h1 className="p-4">STANDARD</h1>
                        <div className="bg-[#E4003A] w-32 rounded-xl mx-auto p-4 mt-2">
                            <h1>$9.99</h1>
                            <p>Monthly</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Video Quality</p>
                            <p>Better</p>

                        </div>
                        <div className="flex justify-between p-1">
                            <p>Resolution</p>
                            <p>1080</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Screen You Can Watch</p>
                            <p>2</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Cancel Anytime</p>

                        </div>
                        <div>
                            <button className="mt-5 bg-[#E4003A] rounded-xl p-2">Buy Now</button>
                        </div>
                    </div>
                    <div className="hover:border border-[#E4003A] h-96 m-4 p-8 w-72 text-center bg-gray-950 rounded-lg transition-all ease-in-out hover:scale-110 duration-300">
                        <h1 className="p-4">PREMIUM</h1>
                        <div className="bg-[#E4003A] w-32 rounded-xl mx-auto p-4 mt-2">
                            <h1>$11.99</h1>
                            <p>Monthly</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Video Quality</p>
                            <p>Best</p>

                        </div>
                        <div className="flex justify-between p-1">
                            <p>Resolution</p>
                            <p>4K+HDR</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Screen You Can Watch</p>
                            <p>4</p>
                        </div>
                        <div className="flex justify-between p-1">
                            <p>Cancel Anytime</p>

                        </div>
                        <div>
                            <button className="mt-5 bg-[#E4003A] rounded-xl p-2">Buy Now</button>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    )
}

export default Pricing;
