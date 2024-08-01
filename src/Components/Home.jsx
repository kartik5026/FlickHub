import {useEffect, useState } from "react";
import { getFantasyTvShows } from "../API/getMovies";


const baseImgUrl = "https://image.tmdb.org/t/p/original/";

function Home() {
   const [shows, setShows] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   

   useEffect(() => {
      getFantasyShows();
   }, []);

   async function getFantasyShows() {
      const shows = await getFantasyTvShows();
      const res = await shows.json();
      console.log(res.results);
      setShows(res.results);
      setIsLoading(false);
   }

 

   return (
      <>
         {isLoading === false ? (
            <div className="flex max-h-[430px] md:ml-0 md:max-h-full md:overflow-x-scroll md:flex-row md:justify-evenly flex-col overflow-y-scroll scroll-smooth no-scrollbar mt-5 ml-[20%]">
               {shows.map((item, id) => (
                  <div className="p-5 md:ml-32 md:text-lg text-xs text-center justify-center rounded-3xl w-full" key={id - 1}>
                     <img
                        key={id}
                        src={baseImgUrl + item.backdrop_path}
                        className="md:block hidden min-w-[50vw] h-[40vh] object-cover rounded-2xl transition-all ease-in-out duration-500 hover:border hover:scale-90"
                     />
                     <img
                        key={id + 2}
                        src={baseImgUrl + item.poster_path}
                        className="md:hidden block min-w-[20vw] h-[30vh] object-cover rounded-2xl transition-all ease-in-out duration-500 hover:border hover:scale-90"
                     />
                     <button className="hover:bg-[#E4003A] rounded-lg w-32 mt-4 p-2 bg-gray-400">Watch</button>
                     <p>{item.original_name}</p>
                     <p>Rating🌟{item.vote_average}</p>
                     <p className="text-xs md:block hidden">Overview:{item.overview}</p>
                  </div>
               ))}
            </div>
         ) : (
            <div>Loading Use VPN....</div>
         )}
      </>
   );
}

export default Home;
