import { getTopRatedMovies } from "../API/getMovies";
import { useState , useEffect} from "react";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";
function Movies() {
    const [topMovies, setTopMovies] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        getTopMovies();
    }, [])
    async function getTopMovies() {
        const movies = await getTopRatedMovies();
        const res = await movies.json();
        console.log(res.results);
        setTopMovies(res.results);
        setIsLoading(false);
    }
    return (
        <>
        
        {   
            isLoading===false?
            
            <div className="flex flex-wrap md:max-h-[500px]  max-h-[430px] overflow-y-scroll no-scrollbar scroll-smooth mt-10">
                {
                    topMovies.map((item,id) => (
                        <div key={id-1} className="md:w-1/5 text-center w-full p-4  hover:border rounded-xl">
                            <img key={id} src={baseImgUrl+item.backdrop_path} className="rounded-xl md:hover:scale-110 transition-all ease-in-out"></img>
                            <p className="mt-4">{item.original_title}</p>
                            <p>Rating 🌟 {item.vote_average}</p>
                        </div>
                    ))
                }
            </div>:
            <div>Loading Use VPN... </div>
        }
        </>
    )
}
export default Movies;