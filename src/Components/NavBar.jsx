import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import Home from "./Home";
function NavBar() {
    return (
        <>
            <div className="md:w-36 w-28  min-h-[90vh]  flex flex-col justify-evenly mt-4 ml-2 md:text-xl text-sm">
                <Link to={"/"}>
                    <div className="my-8 py-2 text-center hover:bg-[#E4003A] rounded-lg px-4 w-full flex flex-row justify-evenly">
                        <FaHome className="mt-1" />
                        Home
                    </div>
                </Link>
                <Link to={"/movies"}>
                    <div className="my-8 py-2 text-center hover:bg-[#E4003A] rounded-lg px-4 w-full flex flex-row justify-evenly">
                        <BiSolidMoviePlay className="mt-1" />
                        Movies
                    </div>
                </Link>

                <Link to={"/tvshows"}>
                    <div className="my-8 py-2 text-center hover:bg-[#E4003A] rounded-lg px-4 w-full flex flex-row justify-evenly">
                        <FaTv className="mt-1" />
                        Shows
                    </div>
                </Link>

                <Link to={"/pricing"}>
                    <div className="my-8 py-2 text-center hover:bg-[#E4003A] rounded-lg px-4 w-full flex flex-row justify-evenly">
                        <MdOutlinePriceChange className="mt-1" />
                        Pricing
                    </div>
                </Link>

                <Link to={"/contacts"} >
                    <div className="my-8 py-2 text-center hover:bg-[#E4003A] rounded-lg px-4 w-full flex flex-row justify-evenly">
                        <RiContactsFill className="mt-1" />
                        <span className="ml-3">Contacts</span>
                    </div>
                </Link>

            </div>
        </>
    )
}
export default NavBar;