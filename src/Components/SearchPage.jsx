import { useContext, useEffect } from "react";
import { MovieContext } from "./ContextApi/MovieProvider";


const baseImgUrl = "https://image.tmdb.org/t/p/original/";

function SearchPage(){

    const {searchData} =  useContext(MovieContext);
    
    console.log(searchData);
   

    return(
        <>
        
        <div className="flex flex-wrap max-h-[500px] overflow-y-scroll no-scrollbar scroll-smooth">
            {
                searchData.map((item,id)=>(
                    <div  key={id-1} className="md:w-1/6 p-4 text-center w-1/2">
                        <img key={id}  src={baseImgUrl+item.poster_path} className="rounded-xl"></img>
                        <p key={id+1} >{item.title?item.title:item.name}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default SearchPage;