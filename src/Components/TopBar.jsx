import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { searchMovies } from "../API/getMovies";
import { useContext} from "react";
import { MovieContext } from "./ContextApi/MovieProvider";

function TopBar() {
   
   const {searchData,setSearchData} = useContext(MovieContext);
   
   async function getData(e) {
      const title = e.target.value;
      const movies = await searchMovies(title);
      const res = await movies.json();
      setSearchData(res.results);
      
   }
   // console.log(searchData);

   
   return (
      <>
         <div className="flex justify-between">
            <div className="text-xl md:text-4xl ml-8">
               <a href="/"><span>Flick</span>
               <span className="text-sm md:text-lg bg-[#E4003A] rounded-lg ml-1 p-1">Hub</span></a>
            </div>
            <div className="mr-[10%] mt-1 flex">
               <CiSearch className="text-2xl ml-2 absolute mt-1" />
               <Link to="/search"><input  onChange={(e) => getData(e)} type="text" placeholder="Search Bar" className="md:w-[30vw] w-[40vw] h-8 rounded-xl text-center bg-[#151515] border"></input></Link>
            </div>
         </div>
      </>
   );
}

export default TopBar;
