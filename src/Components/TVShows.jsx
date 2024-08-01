import { useEffect, useState } from "react";
import {  getTopRatedShows } from "../API/getMovies";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";
function TVShows() {

    const [topMovies, setTopMovies] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        getTopMovies();
    }, [])
    async function getTopMovies() {
        const movies = await getTopRatedShows();
        const res = await movies.json();
        console.log(res.results);
        setTopMovies(res.results);
        setIsLoading(false);
    }
    return (
        <>
        {
        isLoading==false?
        <div className="mt-10 flex flex-wrap scroll-smooth no-scrollbar  max-h-[80vh] overflow-y-scroll ">
            {topMovies.map((item, id) => (

                <div className="p-4 text-center md:w-1/5 w-full hover:border rounded-xl" key={id-1}>
                <img key={id} src={baseImgUrl + item.backdrop_path} className="rounded-xl md:hover:scale-110 transition-all ease-in-out"/>
                    <p className="mt-4">{item.name}</p>
                    <p>Rating 🌟 {item.vote_average}</p>
                </div>
              
            ))}
        </div>:
        <div>Loading Use VPN...</div>
        }
        </>
    )
}
export default TVShows;