function Contact() {
    return (
        <div className="w-full max-h-[500px] overflow-y-scroll no-scrollbar">
            <div className="bg-[url('/heroImage.jpg')] w-full h-[50%] bg-cover bg-center text-center text-white">
                <h1 className="md:text-6xl text-lg pt-28 tracking-wider">Contact Us</h1>
                <a href="/" className="text-red-500 p-1">Home</a><span> | Contact</span>
            </div>

            <div className="mt-10 border border-white p-5 w-full  rounded-3xl md:text-lg text-sm">
                <form action="https://formspree.io/f/mnnadvzv" method="POST">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="p-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name*"
                                        className="w-full max-w-lg p-2 border border-gray-300 rounded-lg bg-gray-950"
                                        required
                                    />
                                </td>
                                <td className="p-2">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email*"
                                        className="w-full max-w-lg p-2 border border-gray-300 rounded-lg bg-gray-950"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                            <td colSpan="2" className="p-2">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject*"
                                        className="w-full p-2 border border-gray-300 rounded-lg bg-gray-950"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="p-2">
                                    <textarea
                                        name="message"
                                        placeholder="Type your message..."
                                        className="w-full p-2 border border-gray-300 rounded-lg bg-gray-950"
                                        rows="4"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-[#E4003A] text-white text-xl rounded-lg px-4 py-2"
                                    >
                                        Send
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Contact;
