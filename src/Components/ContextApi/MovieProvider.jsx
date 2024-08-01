import { createContext, useState } from "react";

export const MovieContext = createContext();
function MovieProvider({children}){
    const [searchData,setSearchData] = useState([]);
   
    return(
        <MovieContext.Provider value={{searchData,setSearchData}}>
            {children}
        </MovieContext.Provider>
    )
}
export default MovieProvider;